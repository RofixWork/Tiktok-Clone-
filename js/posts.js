const posts = JSON.parse(localStorage.getItem("posts")) || [
  {
    username: "abdessamad",
    caption: " bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/9ad7781d128e7130b4e09f1538d8043e/628d0ea1/video/tos/useast2a/tos-useast2a-ve-0068c002/0baeff6c9f164c4db9553b50444ae7cd/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1048&bt=524&cs=0&ds=3&ft=eXd.6HpoMyq8ZO4RTwe2N9v6yl7Gb&mime_type=video_mp4&qs=0&rc=ODhoPDllOWVoN2VnPGk0Z0Bpajh0cjo6Zmd3NzMzNzczM0BfMmAxMGAwNTAxNi41MWFfYSNiX2MvcjRfYHNgLS1kMTZzcw%3D%3D&l=202205241057300102230850191B013054",
  },
  {
    username: "rofixkengan",
    caption: "bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/6511a136636ce8d94964c3425f073d23/628bbfd4/video/tos/useast2a/tos-useast2a-ve-0068c002/d522ebc223824bb584832e4d4826df80/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3594&bt=1797&cs=0&ds=3&ft=eXd.6HpoMyq8ZU9I9we2N8zWyl7Gb&mime_type=video_mp4&qs=0&rc=NzVmZTc6ZGRlPDo2ZDQ2NkBpM2w3OjU6Zjd0OjMzNzczM0AzXi02Ni9jNl8xXjVhLzY0YSMvMzVqcjRfMmZgLS1kMTZzcw%3D%3D&l=20220523110859010223099143170A3A34",
  },
  {
    username: "ahmed",
    caption: "bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/068a330714eb0b84b7e600809b5158e0/628bbfaf/video/tos/useast2a/tos-useast2a-ve-0068c001/059bf94ef81e4c97b0c2640802d43dd2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1422&bt=711&cs=0&ds=3&ft=eXd.6HpoMyq8ZzqI9we2Nktwyl7Gb&mime_type=video_mp4&qs=0&rc=NWdmOzs0ZDwzO2U0ZjVpNEBpajZmdjg6ZnhrOjMzNzczM0AyYS0wYDVhNmIxM2I0YjUwYSNgamdmcjQwYjZgLS1kMTZzcw%3D%3D&l=202205231108050101920501500E0942BD",
  },
  {
    username: "ali",
    caption: "bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/f8dc2fb3db346031fa91e6d1e7eba7f6/628bbfb7/video/tos/useast2a/tos-useast2a-ve-0068c003/db456439a1884bcc8720206e8fd0a2b9/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1986&bt=993&cs=0&ds=3&ft=eXd.6HpoMyq8ZU9I9we2N8zWyl7Gb&mime_type=video_mp4&qs=0&rc=OTczMzplOzRkNTQ3aDplOkBpM3BxOmk6ZnF1ODMzNzczM0A2YTNhNGIyXmMxLmEvYF5jYSNjbG5xcjQwbmxgLS1kMTZzcw%3D%3D&l=20220523110859010223099143170A3A34",
  },
  {
    username: "aymen",
    caption: "bla bla bla bla",
    video:
      "https://v16-webapp.tiktok.com/b4d2193984cdc8c62e90b2662ccece5d/628bbfc1/video/tos/useast2a/tos-useast2a-ve-0068c001/0a67181086be4f75a00c74e0917712b0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2066&bt=1033&cs=0&ds=3&ft=eXd.6HpoMyq8ZU9I9we2N8zWyl7Gb&mime_type=video_mp4&qs=0&rc=OGQ2aTo0NDQ0O2RkNzY4N0BpM3k3amk6ZnNvOjMzNzczM0AvXjBeMC1hNmIxYC1jMF8xYSNpcG1jcjRvNnJgLS1kMTZzcw%3D%3D&l=20220523110859010223099143170A3A34",
  },
];

export default posts;
