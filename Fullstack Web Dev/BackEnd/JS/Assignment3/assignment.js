// 1. What is the Node.js Event Loop? (0.5 Grade)
// The Event Loop is the mechanism that lets Node.js perform non-blocking I/O despite
// JavaScript being single-threaded. It continuously checks the call stack and, once it's
// empty, picks up callbacks from various queues (timers, I/O, microtasks, etc.) and pushes
// them onto the stack to run. This is what allows Node to handle many concurrent
// operations (file reads, network requests) without creating a thread per request.
{
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout callback");
    }, 0);

    console.log("End");
    // Output order: "Start", "End", "Timeout callback"
    // -> synchronous code runs first, the setTimeout callback only runs
    // after the call stack is empty, even with a 0ms delay.
}



// 2. What is Libuv and What Role Does It Play in Node.js? (0.5 Grade)
// Libuv is a C library that Node.js uses to implement its event loop and handle
// asynchronous, non-blocking operations. It abstracts away OS-level differences
// (Windows, Linux, macOS) for things like file system access, networking, DNS
// resolution, and timers. Libuv also provides the thread pool that Node uses for
// operations that can't be done asynchronously at the OS level (e.g. some fs calls,
// crypto, and DNS lookups), so JavaScript code itself stays single-threaded while
// the heavy lifting happens behind the scenes in libuv.
{
    const fs = require("fs");

    fs.readFile(__filename, "utf-8", (err, data) => {
        // console.log("File read complete, length:", data.length);
        // -> Under the hood, libuv delegates this read to its thread pool
        // and notifies the event loop via a callback once it's done.
    });
}



// 3. How Does Node.js Handle Asynchronous Operations Under the Hood? (0.5 Grade)
// Node.js runs JS on a single thread, but async operations (I/O, timers, network calls)
// are delegated to the system kernel or to libuv's thread pool. When an async operation
// is started, Node registers a callback and continues executing the rest of the code
// without waiting. Once the operation completes, libuv places the callback into the
// appropriate queue, and the event loop picks it up and runs it once the call stack
// is empty. This is what gives Node its non-blocking, event-driven behavior.
{
    console.log("1. Request received");

    setTimeout(() => {
        console.log("3. Async DB query result ready");
    }, 100);

    console.log("2. Continue processing other requests");
    // The thread never sits idle waiting for the timer/DB;
    // it keeps handling other work until the callback is ready.
}



// 4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js? (0.5 Grade)
// - Call Stack: where synchronous JS code executes, function calls are pushed on entry
//   and popped on return (LIFO). If the stack is not empty, nothing else can run.
// - Event Queue (a.k.a. callback/task queue): holds callbacks from completed async
//   operations (timers, I/O, etc.) waiting to be executed.
// - Event Loop: the coordinator. It continuously checks whether the call stack is
//   empty, and if so, dequeues the next callback from the event queue and pushes it
//   onto the call stack to run.
{
    function first() { second(); }
    function second() { console.log("On the call stack"); }

    first(); // first() and second() are pushed/popped on the call stack synchronously

    setTimeout(() => {
        console.log("Came from the event queue, run by the event loop");
    }, 0);
}



// 5. What is the Node.js Thread Pool and How to Set the Thread Pool Size? (0.5 Grade)
// The thread pool is a set of worker threads (provided by libuv) that Node uses to run
// operations that would otherwise block the event loop, such as certain fs operations,
// crypto (e.g. pbkdf2, scrypt), zlib compression, and DNS lookups (dns.lookup). By
// default, the pool has 4 threads. Its size can be changed by setting the
// UV_THREADPOOL_SIZE environment variable (up to 1024) before the process starts.
{
    // Example: increasing the thread pool size (must be set before Node starts,
    // e.g. in the shell or via cross-env in an npm script)
    // process.env.UV_THREADPOOL_SIZE = 8; // has no effect if set after startup

    const crypto = require("crypto");
    const start = Date.now();

    for (let i = 0; i < 4; i++) {
        crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
            // console.log(`Task ${i} done in ${Date.now() - start}ms`);
            // -> With only 4 threads (default), these 4 CPU-heavy tasks run
            // roughly in parallel; a 5th one would have to wait for a free thread.
        });
    }
}



// 6. How Does Node.js Handle Blocking and Non-Blocking Code Execution? (0.5 Grade)
// Blocking code runs synchronously on the main thread and stops everything else until
// it finishes (e.g. fs.readFileSync, a heavy CPU-bound loop). Non-blocking code
// delegates the work to libuv/the OS and immediately returns control to the event loop,
// running the rest of the program while it waits, then executing a callback (or
// resolving a Promise) once the work is done. Node.js is designed to favor non-blocking
// APIs so a single thread can serve many concurrent clients efficiently.
{
    const fs = require("fs");

    // Blocking version: nothing else can run until the file is fully read
    // const data = fs.readFileSync(__filename, "utf-8");
    // console.log("Blocking read done");

    // Non-blocking version: the read happens in the background, code keeps going
    fs.readFile(__filename, "utf-8", (err, data) => {
        // console.log("Non-blocking read done");
    });

    console.log("This runs before the non-blocking read finishes");
}
