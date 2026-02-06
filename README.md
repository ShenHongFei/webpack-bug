### Problem
require('node:events') returns an object of the wrong type. 

Webpack@5.104.1 is the last working version; subsequent versions are incorrect.

### Reproduce
```shell
npm install -g pnpm

git clone https://github.com/ShenHongFei/webpack-bug.git

cd webpack-bug

pnpm install

node ./build.js && node ./dist/bundle.mjs
```

### Error
```
file:///T:/bug/dist/bundle.mjs:40
class C extends EventEmitter { }
                ^

TypeError: Class extends value [object Module] is not a constructor or null
    file:///T:/bug/dist/bundle.mjs:40:17
    ModuleJob.run() at internal/modules/esm/module_job:430:25
    onImport.tracePromise.__proto__() at internal/modules/esm/loader:655:26
    asyncRunEntryPointWithESMLoader() at internal/modules/run_main:101:5
```

### Correct versions
#### webpack@5.104.1

### Breaking versions
#### webpack@5.105.0
