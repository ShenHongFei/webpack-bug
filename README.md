### Problem
When building multiple entries, the imported functions in the generated bundle are empty.  

Webpack@5.101.0 is the last working version; subsequent versions are incorrect.

### Reproduce
```shell
npm install -g pnpm

git clone https://github.com/ShenHongFei/webpack-bug.git

cd webpack-bug

pnpm install

# Error: flist should exists
node ./main.js && node ./dist/bundle.mjs

# no error: single entry
node ./main.js normal && node ./dist/bundle.mjs
```

### Error
```
Error: flist should exists
    file:///T:/bug/dist/bundle.mjs:28519:11
    __webpack_require__.a() at file:///T:/bug/dist/bundle.mjs:52114:12
    5140() at file:///T:/bug/dist/bundle.mjs:28514:21
    __webpack_require__() at file:///T:/bug/dist/bundle.mjs:52033:41
    file:///T:/bug/dist/bundle.mjs:52191:36
    ModuleJob.run() at internal/modules/esm/module_job:413:25
    onImport.tracePromise.__proto__() at internal/modules/esm/loader:654:26
    asyncRunEntryPointWithESMLoader() at internal/modules/run_main:101:5
```

### Correct versions
#### webpack@5.101.0

### Breaking versions
#### webpack@5.101.1 ~ webpack@5.103.0
