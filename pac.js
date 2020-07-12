function FindProxyForURL(url, host) {
    // use proxy for specific domains
    if (shExpMatch(url, "*.fc2.com*")){
        alert(host);
        return "PROXY 167.71.91.204:8080";
    }
    // by default use no proxy
    return "DIRECT";
}
