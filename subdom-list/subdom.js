const arr = [
"www","ww1","ww2","ww3","web","home","main","portal","dashboard","console","panel","system",
"online","public","private","intranet","extranet","internal","external","site","app","apps",
"webapp","frontend","backend","service","services","webservice","appservice","mobile","m",
"client","server","servers","edge","edge1","edge2","router","switch","gateway","gw","firewall",
"fw","proxy","proxy1","proxy2","reverseproxy","reverse","vpn","vpn1","vpn2","vpn3","remote",
"rdp","citrix","terminal","vdi","jump","jumphost","bastion","bastionhost",

"mail","mail1","mail2","mail3","email","smtp","smtp1","smtp2","smtp3","imap","pop","pop3",
"mx","mx1","mx2","mx3","autodiscover","autoconfig","relay","mta","newsletter","lists","mailbox",
"mailserver","webmail","exch","exchange","exch1","exch2","imap1","imap2",

"admin","administrator","admins","root","login","signin","signon","signon1","authentication",
"auth","auth1","auth2","oauth","oauth2","sso","identity","secure","security","account",
"accounts","user","users","profile","profiles","session","sessions","pwd","password","reset",
"forgot","token","tokens","access","accesspanel","cp","cpanel","whm",

"dev","developer","dev1","dev2","dev3","devel","development","build","builder","builds","ci",
"cd","cicd","jenkins","git","github","gitlab","bitbucket","svn","repo","repos","repository",
"code","code1","code2","source","sources","staging","stage","preprod","prod","production",
"live","beta","alpha","canary","testing","test","qa","uat",

"api","api1","api2","api3","apis","rest","restapi","rest1","graphql","gql","internal-api",
"external-api","core","coreapi","service-api","backend-api","internal","micro","microservice",
"microservices","v1","v2","v3","v4","v5","endpoint","endpoints",

"monitor","monitoring","metrics","status","uptime","downtime","health","healthcheck","check",
"checks","alert","alerts","event","events","log","logs","logging","logserver","log1","log2",
"grafana","prometheus","elastic","elk","splunk","insights","analytic","analytics","observability",

"cdn","cdn1","cdn2","cdn3","cache","static","static1","static2","static3","public-cdn",
"private-cdn","origin","edgecdn","object","assets","files","upload","uploads","file","file1",
"file2","downloads","download","drive","drives","blob","blobs","store","storage","s3","bucket",
"buckets","backup","backups","archive","archives",

"db","db1","db2","db3","database","databases","sql","mysql","mysql1","mysql2","postgres",
"postgresql","pg","mongo","mongodb","redis","redis1","redis2","mariadb","oracle","mssql",
"sqldb","nosql","cassandra","cluster","cluster1","cluster2","dbadmin","adminer","phpmyadmin",
"pgadmin","kibana","influx","influxdb",

"media","mediaserver","stream","streams","video","videos","audio","audios","img","images",
"image","picture","pictures","photos","photo","gallery","cdn-media","player","live-stream",
"livestream","cdn-video","cdn-img","thumb","thumbnails","assets2","content","cdn-content",

"support","help","helpdesk","desk","ticket","tickets","docs","documentation","doc","kb",
"knowledge","wiki","faqs","faq","forum","community","chat","chats","chatbot","bot","bots",
"message","messages","notify","notification","notifications","feedback","contact","contactus",

"secure","ssl","tls","scan","scanner","threat","monitor-sec","monitoring-sec","security-gateway",
"idp","ids","ips","antivirus","malware","protection","vault","key","keys","secrets","secret",
"hsm","tokenizer","crypt","crypto","encrypt","decryption","cert","certificate","certs",

"billing","billing1","billing2","payment","payments","pay","checkout","invoice","invoices",
"wallet","gateway-pay","pay1","pay2","subscription","subscriptions","plans","plan",

"crm","erp","hr","hrm","office","workspace","portal-user","customer","customers","client",
"clients","partner","partners","trade","business","marketing","ads","campaign","crm1","crm2",

"store","shop","ecommerce","cart","order","orders","catalog","product","products","api-store",
"checkout2","seller","buyer","payment-api","stock","inventory","warehouse","sales","pos",

"aws","amazon","cloud","cloud1","cloud2","cloud3","azure","google","gcp","compute","vm",
"vm1","vm2","k8s","kubernetes","container","containers","docker","dock","registry","repo-docker",
"orchestrator","manager","orchestration","scheduler","nodes","nodepool","nodegroup",

"config","configuration","configs","settings","set","setup","policy","policies","rules",
"firewall-rules","dns","dns1","dns2","zone","zones","resolver","resolve","bind","bind9",
"nameserver","nameservers","resolver1","resolver2","lookup",

"internal-mail","internal-api","internal-db","internal-services","internal-gateway",
"internal-app","local","localapi","lan","wan","edge-gw","router1","router2","switch1","switch2",

"sandbox","sandbox1","sandbox2","devtools","tools","tool","toolkit","lab","labs","unittest",
"testcase","testcases","staging-api","demo","demo1","demo2","beta-api","test-api",

"game","games","gaming","arcade","demo-game","engine","engine1","engine2","simulation",
"sim","simulator","multiplayer","matchmaking","leaderboard","score","scores","play","play1",

"app1","app2","app3","mob","mobileapp","mobile1","mobile2","tablet","ios","android","apk",
"ipa","device","devices","deviceapi","firmware","fw1","fw2","update","updates",

"event","events","calendar","meet","meeting","video-call","conference","videochat","rooms",
"room","room1","room2","camera","cam","webcam","call","calls","rtc","voip","sip","sip1","sip2",

"gateway2","switch3","proxy3","proxy4","cdn4","cdn5","route","route1","route2","infra",
"infrastructure","backend2","backend3","frontend2","frontend3","api-gateway","gateway-api",

"job","jobs","career","careers","apply","applications","hire","hiring","recruit","recruitment",
"portal-career","candidate","candidates","resume","resumes","cv","profile-user","employee",
"employees","staff","team","teams","work","workflow","workflows",

"module","modules","package","packages","pkg","lib","libs","library","libraries","function",
"functions","services2","ms","srv","srv1","srv2","runtime","processors","controller",
"controllers","load","loader","loaders","queue","queues","task","tasks","scheduler2",

"api-login","api-auth","api-gateway2","api-user","api-system","api-payment","api-admin",
"payment-system","user-system","notification-api","email-api","sms","sms1","sms2","mms",

"reports","report","stat","stats","statistics","dashboard2","dash","dash1","analytic2",
"bi","dataviz","visualization","visual","monitor2","monitor3","reporting","insight","insights2",

"cdn-js","cdn-css","cdn-img2","asset","asset1","asset2","fonts","font","themes","theme",
"style","styles","ui","ux","components","component","layout","layouts",

"route3","route4","apiserver","webserver","appserver","server-api","api-edge","edge-api",
"loadbalancer","lb","lb1","lb2","lb3","ha","clustered","cluster-api","node4","node5",

"session-api","token-api","config-api","settings-api","meta","metadata","store-api","media-api",
"image-api","cdn-api","upload-api","download-api","cdn-edge","cdn-origin","origin1","origin2",

"finance","financial","bank","banking","ledger","wallet-api","crypto-api","exchange-api",
"accounting","tax","budget","budgets","fin","fin1","fin2","gateway-fin","billing-api",

"backup1","backup2","failover","dr","disaster","mirror","mirror1","mirror2","secondary","primary",
"replica","replicas","replication","sync","sync1","sync2","restore","restoration",

"int","int1","int2","gateway-int","local1","local2","office1","office2","zone1","zone2",
"area","region","region1","region2","global","global1","global2","continent","geo","geo1","geo2",

"hub","hub1","hub2","connect","connection","connector","connectors","router-api","dns-api",
"dns-admin","dns-control","dns-gateway","resolve-api","resolver-api","network","network1",
"network2","network3",

"training","train","train1","learn","learning","education","edu","edu1","school","academy",
"tutorial","tutorials","docs-api","docserver","handbook","guide","guides","lab1","lab2",

"portal2","portal3","inbox","outbox","workspace2","workspace3","suite","suite1","suite2",
"enterprise","corp","corporate","institute","division","dept","department","branch","branches",

"login2","auth3","auth4","authserver","oauth-server","credentials","credential","identity2",
"identity3","authorize","authorization","token1","token2","sessionserver","session1","session2",

"metrics2","metrics3","logs2","logs3","storage2","storage3","vault2","vault3","secrets2",
"secrets3","config1","config2","config3","adminpanel","controlpanel","master","slave","primary2",
"secondary2","worker","workers","executor","executors",

"task1","task2","file-api","file-store","objectstore","object-storage","blobstore","blob-storage",
"content-api","cdn-files","cdn-media2","cdn-content2","media2","stream2","stream3","image2",
"image3","img2","img3",

"serverless","lambda","function1","function2","api-functions","cloudfunctions","edge-functions",
"faas","paas","saas","gateway-saas","cluster3","cluster4","k8s-api","kube","kubectl",

"router3","route-api","ips2","ids3","ids4","monitor-sec2","scan-api","scanner1","scanner2",
"threat2","threat3","protection2","shield","shield1","shield2","malware2","antivirus2",

"test1","test2","test3","sandbox3","sandbox4","debug","debug1","debug2","testing2","testing3",
"trial","beta2","beta3","alpha2","alpha3","lab3","lab4","experiment","experiments","prototype",
"proto","proto1","proto2",

"voice","voice1","voice2","assistant","ai","ml","ml1","ai-api","neural","nlp","cv","vision",
"ocr","qa1","qa2","bot2","bot3","chat2","chat3","call2","call3","voip2","sip3","rtc2","rtc3",

"cloudfront","ec2","lambda2","sagemaker","cloudsql","bigquery","firestore","firebase",
"cloudrun","cloudstorage","cloudbuild","azurevm","azurestorage","azuredns",

"payment2","payment3","gateway3","gateway4","invoice2","invoice3","billing3","billing4",
"subscription2","subscription3","wallet2","wallet3","transaction","transactions","txn","txn1",
"merchant","merchant1","merchant2",

"geo3","geo4","ip","ip1","ip2","geoip","location","locator","locator1","locator2","region3",
"region4","global3","global4","world","worldwide","earth","map","maps","mapping","gps",

"event2","event3","queue2","queue3","messaging","message2","message3","bus","kafka","kafka1",
"kafka2","rabbit","rabbitmq","mq","mq1","mq2","broker","broker1","broker2","streaming","streams2",

"cdn6","cdn7","static4","static5","staticcdn","dynamic","dynamiccdn","edge5","edge6","origin3",
"origin4","asset3","asset4","core1","core2","core3","core4","infra2","infra3","platform",
"platform1","platform2","control","controller2","controller3","ops","ops1","ops2","devops",

"api4","api5","apiadmin","apiinternal","gateway5","balancer","balancer1","balancer2",
"dispatcher","dispatch","router5","router6","port","port1","port2","endpoint2","endpoint3",
"endpoints3","env","env1","env2","vault-api",

"ml2","ml3","datascience","ds","ds1","ds2","dataserver","model","models","training2","trainer",
"ai2","ai3","bot4","nlp2","vision2","vision3","compute2","compute3","storage4","storage5",

"cache1","cache2","cache3","search","search1","search2","crawler","crawl","index","indexer",
"index1","index2","data","data1","data2","datas","dataset","datasets","lake","datalake",
"analysis","analyze","parser","parse",

"geo5","geo6","node7","node8","cluster5","cluster6","compute4","compute5","storage6","storage7",
"vm3","vm4","vm5","infra6","infra7","build2","build3","pipeline","pipeline1","pipeline2","orchestration2",

"email2","email3","sender","send","smtp4","smtp5","mailgate","mailgateway","mailrelay",
"relay2","relay3","antispam","spamfilter","filter","filters","mailcheck","mailtest",

"cdn-api2","frontend4","backend4","microfrontend","microbackend","grafana2","status2","health2",
"health3","uptime2","monitor4","monitor5","alert3","alert4","metric1","metric2","metric3",

"home1","home2","root2","root3","appstore","appcenter","apps2","apps3","control2","config4",
"auth-api","login-api","session-api2","cdn-admin","admin2","admin3","router7","proxy5",

"cdn8","cdn9","cdn10","static6","static7","images3","images4","media3","video3","audio3",
"streaming3","streaming4","photo2","photo3","image4","assets5","asset6","download2",
"download3","upload2","upload3"
];


module.exports = arr;