function FindProxyForURL(url, host) {
    // use proxy for specific domains
    if (shExpMatch(url, "*.fc2.com*")){
        alert(host);
        return "PROXY 209.41.69.101:3128";
    }
    // by default use no proxy
    return "DIRECT";
}
