// A workaround needed because of the project's file structure (&& in an npm script is not cross platform)
const childProcess = require('child_process');
const options = {stdio: 'inherit', cwd: 'webapp', shell: true};
childProcess.spawn('npm', ['start'], options);
