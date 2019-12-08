module.exports = {
    apps: [
        {
            name: "Tensorhack2019/api",
            cwd: __dirname + '/api-server',
            script: __dirname + "/api-server/index.js"
        },
        {
            name: "Tensorhack2019/ws",
            cwd: __dirname + '/socket-server',
            script: __dirname + "/socket-server/index.js"
        },
        {
            name: "Tensorhack2019/proxy",
            cwd: __dirname + '/proxy-server',
            script: __dirname + "/proxy-server/index.js"
        },
    ]
}
