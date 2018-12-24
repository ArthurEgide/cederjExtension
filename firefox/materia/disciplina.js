var pri = document.getElementsByClassName("tab_level_0")[0],
    a = document.getElementsByClassName("tab_level_0")[1],
    b = document.getElementsByClassName("tab_level_0")[2],
    c = document.getElementsByClassName("tab_level_0")[3],
    d = document.getElementsByClassName("tab_level_0")[4],
    node = document.createElement("P"),
    aa = document.createElement("P"),
    bb = document.createElement("P"),
    cc = document.createElement("P"),
    dd = document.createElement("P"),

    cores = ["statusCircle gray", "statusCircle blue", "statusCircle green", "statusCircle red"];
    node.className = "statusCircle red";
    aa.className = "statusCircle red";
    bb.className = "statusCircle gray";
    cc.className = "statusCircle blue";
    dd.className = "statusCircle green";

pri.appendChild(node);
a.appendChild(aa);
b.appendChild(bb);
c.appendChild(cc);
d.appendChild(dd);
