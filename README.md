### reproduce
```shell
# prepare windows machine

npm install -g pnpm

git clone https://github.com/ShenHongFei/webpack-bug.git

cd webpack-bug

pnpm install

node ./main.js
```

### error log
```log
    [webpack.cache.PackFileCacheStrategy] No pack exists at T:\webpack-bug\node_modules\.cache\webpack\default-production.pack: Error: ENOENT: no such file or directory, stat 'T:\webpack-bug\node_modules\.cache\webpack\default-production\index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 30.6804 ms
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: Compilation/modules|T:\webpack-bug\node_modules\.pnpm\ts-loader@9.5.1_typescript@5.6.3_webpack@5.95.0\node_modules\ts-loader\index.js??ruleSet[1].rules[0]!T:\webpack-bug\entry.ts
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\, T:\webpack-bug\tsconfig.json, T:\webpack-bug\node_modules\.pnpm\ts-loader@9.5.1_typescript@5.6.3_webpack@5.95.0\node_modules\ts-loader\index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 533.4064 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Error snapshotting file timestamp hash combination of T:\: SystemError [ERR_FS_EISDIR]: Path is a directory: read returned ERR_FS_EISDIR (is a directory) T:\
        at readFile (node:fs:389:5)
        at go$readFile (T:\webpack-bug\node_modules\.pnpm\graceful-fs@4.2.11\node_modules\graceful-fs\graceful-fs.js:118:14)
        at Object.readFile (T:\webpack-bug\node_modules\.pnpm\graceful-fs@4.2.11\node_modules\graceful-fs\graceful-fs.js:115:12)
        at FileSystemInfo._readFileHash (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\FileSystemInfo.js:3268:11)
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:324:10
        at Hook.eval [as callAsync] (eval at create (T:\webpack-bug\node_modules\.pnpm\tapable@2.2.1\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:6:1)
        at AsyncQueue._startProcessing (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:314:26)
        at AsyncQueue._ensureProcessing (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:290:9)
        at process.processImmediate (node:internal/timers:511:21)
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 3.4601 ms
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies
    [webpack.cache.PackFileCacheStrategy] Error: Unable to snapshot resolve dependencies
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\cache\PackFileCacheStrategy.js:1385:13
        at jobError (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\FileSystemInfo.js:2232:5)
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\FileSystemInfo.js:2314:10
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\FileSystemInfo.js:3344:13
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:373:5
        at Hook.eval [as callAsync] (eval at create (T:\webpack-bug\node_modules\.pnpm\tapable@2.2.1\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:6:1)
        at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (T:\webpack-bug\node_modules\.pnpm\tapable@2.2.1\node_modules\tapable\lib\Hook.js:18:14)
        at AsyncQueue._handleResult (T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:343:21)
        at T:\webpack-bug\node_modules\.pnpm\webpack@5.95.0\node_modules\webpack\lib\util\AsyncQueue.js:330:10
        at Hook.eval [as callAsync] (eval at create (T:\webpack-bug\node_modules\.pnpm\tapable@2.2.1\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:6:1)
```
