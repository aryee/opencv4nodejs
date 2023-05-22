// alternative to parseEnv.ts
// slower but can be call directly
// last arg can be one of:
// - def for OPENCV4NODEJS_DEFINES
// - inc for OPENCV4NODEJS_INCLUDES

import OpenCVBuilder, { OpencvModule } from "@u4/opencv-build";

// - lib for OPENCV4NODEJS_LIBRARIES

(() => {
  const envName = process.argv[process.argv.length - 1]
  if (envName === 'def' || envName === 'OPENCV4NODEJS_DEFINES') {
    // const lib = compileLib(['auto']);
    // const builder = new OpenCVBuilder({ prebuild: 'latestBuild' });
    // const libsInDir: OpencvModule[] = builder.getLibs.getLibs();
    // const libsFoundInDir: OpencvModule[] = libsInDir.filter(lib => lib.libPath)
    // deprecated.
    // getOPENCV4NODEJS_DEFINES(libsFoundInDir).join(';');
    return;
  } else if (envName === 'inc' || envName === 'OPENCV4NODEJS_INCLUDES') {
    const builder = new OpenCVBuilder({ prebuild: 'latestBuild' });
    console.log(builder.env.opencvInclude);
  } else if (envName === 'lib' || envName === 'OPENCV4NODEJS_LIBRARIES') {
    const builder = new OpenCVBuilder({ prebuild: 'latestBuild' });
    const libsInDir: OpencvModule[] = builder.getLibs.getLibs();
    const libsFoundInDir: OpencvModule[] = libsInDir.filter(lib => lib.libPath)
    for (const X of libsFoundInDir)
      console.log(X.libPath);
  } else {
    throw new Error('invalid type passed as argument must be def, inc or lib')
  }
  //const outputs = (process.env[envName] || '').split(/[\n;]/)
  // outputs.forEach(o => console.log(o))
})();