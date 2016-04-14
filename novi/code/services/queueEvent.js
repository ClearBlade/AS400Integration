function queueEvent(req, resp){
    log(JSON.stringify(req));
    resp.success("successfully called queueEvent");
}