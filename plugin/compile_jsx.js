var reactTools = Npm.require('react-tools')

var handler = function( compileStep ){
    var source = compileStep.read().toString('utf8')
    var outputFile = compileStep.inputPath + '.js'

    compileStep.addJavaScript({
        path: outputFile,
        sourcePath: compileStep.inputPath,
        data: reactTools.transform(source, {harmony: true, sourceMap: true})
    })
}

Plugin.registerSourceHandler('jsx', handler)