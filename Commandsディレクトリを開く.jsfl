/**
 * Flash CCのCommandsディレクトリを開きます
 *
 * バージョン v1.0
 * @author Nozomi Nohara
 *
 **/

function openDirectory(path) {
    var uri = FLfile.uriToPlatformPath(path);
    if (isMac()) {
        FLfile.runCommandLine("open " + "\"" + uri + "\"");
    } else {
        FLfile.runCommandLine("explorer " + "\"" + uri + "\"");
    }
}

openDirectory(fl.configURI + "Commands");