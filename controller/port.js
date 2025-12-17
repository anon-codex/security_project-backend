const net = require("net");
const portNumberValidation = require("../validation/portValidation");

function scanPort(host, port, timeout = 2000) {
  return new Promise((resolve) => {
    const client = new net.Socket();

    let status = null;

    // 1) Try connection
    client.connect(port, host, () => {
      status = "open";
      client.destroy();
      resolve({ port, status });
    });

    // 2) Close = Connection refused (RST)
    client.on("error", (err) => {
      status = "closed";
      client.destroy();
      resolve({ port, status });
    });

    // 3) Timeout = No reply (Filtered)
    client.setTimeout(timeout);
    client.on("timeout", () => {
      status = "filtered";
      client.destroy();
      resolve({ port, status });
    });
  });
}

let flag = false;

const cancel_req = (req, res) => {
  flag = true;
  // console.log("hit cancel", flag);
};

let myArray = [];
let arrNum = 0;

async function send_req(host) {
  // const host = "10.146.55.55";
  myArray = [];
  const ports = [
    { port: 20, service: "FTP-Data" },
    { port: 21, service: "FTP – Auth brute force, Anonymous Login" },
    { port: 22, service: "SSH – Weak creds, old ciphers" },
    { port: 23, service: "Telnet – Cleartext login (highly vulnerable)" },
    { port: 25, service: "SMTP – Open relay, user enumeration" },
    { port: 53, service: "DNS – Zone transfer" },
    { port: 67, service: "DHCP Server" },
    { port: 68, service: "DHCP Client" },
    { port: 69, service: "TFTP – No-auth file download" },
    { port: 80, service: "HTTP – Web vulnerabilities" },
    { port: 110, service: "POP3 – Mail access" },
    { port: 111, service: "RPCbind – NFS/RPC RCE chain" },
    { port: 119, service: "NNTP" },
    { port: 123, service: "NTP – Amplification attack" },
    { port: 135, service: "MS RPC" },
    { port: 137, service: "NetBIOS Name Service" },
    { port: 138, service: "NetBIOS Datagram Service" },
    { port: 139, service: "NetBIOS Session – SMB old version" },
    { port: 143, service: "IMAP" },
    { port: 161, service: "SNMP – Public/Private community leak" },
    { port: 162, service: "SNMP Trap" },
    { port: 389, service: "LDAP – Injection/Misconfig" },
    { port: 443, service: "HTTPS" },
    { port: 445, service: "SMB – EternalBlue, SMBGhost" },
    { port: 512, service: "Rexec – Cleartext access" },
    { port: 513, service: "Rlogin – Cleartext access" },
    { port: 514, service: "RSH – Cleartext access" },
    { port: 548, service: "AFP – Mac file services" },
    { port: 623, service: "IPMI – Password hash extraction" },
    { port: 873, service: "Rsync – Misconfigured file read/write" },
    { port: 902, service: "VMware Server" },
    { port: 903, service: "VMware Management" },
    { port: 1080, service: "SOCKS Proxy" },
    { port: 1433, service: "MSSQL – Default creds, weak security" },
    { port: 1521, service: "Oracle DB" },
    { port: 1723, service: "PPTP – Weak MSCHAP" },
    { port: 1883, service: "MQTT – IoT takeover" },
    { port: 2049, service: "NFS – Open share mount" },
    { port: 2375, service: "Docker Remote API (No TLS) – RCE" },
    { port: 2376, service: "Docker Remote API (TLS)" },
    { port: 3306, service: "MySQL – Weak creds" },
    { port: 3389, service: "RDP – Bruteforce, Bluekeep" },
    { port: 3690, service: "SVN Repo" },
    { port: 4369, service: "Erlang Port Mapper – RCE" },
    { port: 5000, service: "Docker Registry / Dev service" },
    { port: 5432, service: "PostgreSQL" },
    { port: 5601, service: "Kibana" },
    { port: 5900, service: "VNC – No password vulns" },
    { port: 5984, service: "CouchDB" },
    { port: 6379, service: "Redis – Unauthenticated RCE" },
    { port: 7001, service: "WebLogic – RCE" },
    { port: 7002, service: "WebLogic – Admin/SSL" },
    { port: 7233, service: "Zoom (Backend Services)" },
    { port: 7474, service: "Neo4j Browser" },
    { port: 8000, service: "HTTP Alternate" },
    { port: 8008, service: "HTTP Alternate" },
    { port: 8080, service: "HTTP Proxy / Tomcat" },
    { port: 8081, service: "HTTP Alternate (Admin panels)" },
    { port: 8089, service: "HTTP Alternate" },
    { port: 8161, service: "ActiveMQ – RCE" },
    { port: 8443, service: "HTTPS Alternate" },
    { port: 8834, service: "Nessus Scanner" },
    { port: 9000, service: "SonarQube – Code Analysis" },
    { port: 9042, service: "Cassandra DB" },
    { port: 9200, service: "Elasticsearch – No auth RCE" },
    { port: 9300, service: "Elasticsearch Cluster" },
    { port: 11211, service: "Memcached – Amplification attack" },
    { port: 27017, service: "MongoDB – No auth" },
    { port: 50000, service: "SAP Management" },
  ];

  for (let i = 0; i < ports.length; i++) {
    if (flag === true) {
      // console.log("break");
      flag = false;
      break;
    }
    const result = await scanPort(host, ports[arrNum].port);
    const obj = { host: 0, port: 0, status: 0 };
    obj.host = host;
    obj.port = result.port;
    obj.status = result.status;
    obj.service = ports[arrNum].service;
    myArray.push(obj);
    // console.log(`${host}:-${result.port} --> ${result.status}`);
    arrNum++;
  }
  arrNum = 0;
}

const check_Port = async (req, res) => {
  const ip = req.query.ip;
  // console.log("user input = ",ip);
  const result = await portNumberValidation(ip);
  // console.log("love ", result);
  myArray = [];
  if (result.success === false) {
    return res.status(401).json({
      success: false,
       data:result,
    });
  }
  try {
    await send_req(ip);
    return res.status(200).json({
      success: true,
      data: myArray,
    });
  } catch (error) {
    return res.status(401).json({
      success:false,
      msg: "Internal server error",
    });
  }
};

// ----------------------------
// Run Scanner
// ----------------------------



module.exports = { check_Port, cancel_req };
