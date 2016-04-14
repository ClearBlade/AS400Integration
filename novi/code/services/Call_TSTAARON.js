function Call_TSTAARON(req, resp){
    var programName = "TSTAARON";
    var PCMLDef="<pcml version=\"4.0\">    <struct name=\"I_INPUTLIST\"><data name=\"W_ID\" type=\"zoned\" length=\"9\" precision=\"0\" usage=\"inherit\" \/>      <data name=\"W_QUESTION\" type=\"zoned\" length=\"9\" precision=\"0\" usage=\"inherit\" \/>      <data name=\"W_LANGUAGE\" type=\"char\" length=\"3\" usage=\"inherit\" \/>   <\/struct>   <program name=\"TSTAARON\" path=\"\/QSYS.LIB\/SOMEAAA.LIB\/TSTAARON.PGM\">      <data name=\"I_VAR\" type=\"packed\" length=\"9\" precision=\"0\" usage=\"input\" \/>      <data name=\"I_INPUTLIST\" type=\"struct\" struct=\"I_INPUTLIST\" count=\"3\" usage=\"input\" \/>   <\/program><\/pcml>";
    var inputs={"I_VAR": 66666,
            "I_INPUTLIST":[
                {"W_ID":"99999","W_QUESTION":"99999","W_LANGUAGE":"DEU"},
                {"W_ID":"88888","W_QUESTION":"88888","W_LANGUAGE":"DAN"},
                {"W_ID":"77777","W_QUESTION":"77777","W_LANGUAGE":"ENG"}]
    };
    
    var callback = function(err, result){
        resp.success(result);
    }
    var response = callAS400Program(programName,PCMLDef,inputs, callback);
   
}