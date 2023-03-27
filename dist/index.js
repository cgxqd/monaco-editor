export * from 'monaco-editor';

var t=(o="")=>{typeof self<"u"&&(self.MonacoEnvironment={getWorkerUrl(s,r){return r==="json"?o+"/dist/worker/json.global.js":r==="css"||r==="scss"||r==="less"?o+"/dist/worker/css.global.js":r==="html"||r==="handlebars"||r==="razor"?o+"/dist/worker/html.global.js":r==="typescript"||r==="javascript"?o+"/dist/worker/ts.global.js":o+"/dist/worker/editor.global.js"}});};

export { t as initWorkerUrl };
