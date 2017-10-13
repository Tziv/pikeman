# pikeman
HEAVILY WIP.
An authorization token provider written in node.js, intended to be used for scenarios when you have multiple privilege groups and different strategies to authorize each group.
Specify in your configuration file the different privilege groups and their strategies.
By default, the authorization for a privilege group will be granted if any of the strategies pass, but you may add {strict: true} to the configuration file if wish every strategy to be successful.

