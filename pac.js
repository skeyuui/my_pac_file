function FindProxyForURL(url, host) {
    // use proxy for specific domains

    if (shExpMatch(host, "*blog.fc2*")){
        alert(host + " foi por host = *blog.fc2*");
        return "PROXY 167.71.91.204:8080";
    }
    // by default use no proxy
    return "DIRECT";
}
