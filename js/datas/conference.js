const conferences = [
    {
        "date": "1월 3일(금)",
        "content": "[1월 교육] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/151",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "1월 11일(토)",
        "content": "제 9회 투빅스 빅데이터 컨퍼런스",
        "link": "https://onoffmix.com/event/205358",
        "time": "14:00~18:30",
        "location": "NAVER D2 STARTUP FACTORY"
    },
    {
        "date": "1월 13일(월)",
        "content": "2020-제1회 엔젤리더스포럼",
        "link": "https://onoffmix.com/event/204557",
        "time": "17:00~20:00",
        "location": "해성빌딩"
    },
    {
        "date": "1월 14일(화)",
        "content": "[삼성넥스트] ClassroomX : Data만 있으면 Data-driven Business 할 수 있는거야?",
        "link": "https://event-us.kr/sparkplus/event/14136",
        "time": "19:00~21:00",
        "location": "스파크플러스 선릉3호점"
    },
    {
        "date": "1월 15일(수)",
        "content": "[TOAST FORWARD] 프런트엔드 테스팅 기초부터 실전까지",
        "link": "https://onoffmix.com/event/204585",
        "time": "14:00~18:00",
        "location": "NHN | 유료(1만)"
    },
    {
        "date": "1월 15일(수)",
        "content": "Let'Swift 판교 2차",
        "link": "https://festa.io/events/803",
        "time": "19:00~21:00",
        "location": "네이버웹툰 6층 세미나실"
    },
    {
        "date": "1월 16일(목)",
        "content": "오라클 클라우드 도입을 통한 디지털 트랜스포메이션 성공 사례",
        "link": "https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x706858abcd",
        "time": "13:30~17:00",
        "location": "트라디노이(삼성역)"
    },
    {
        "date": "1월 18일(토)",
        "content": "제 11회 BOAZ 빅데이터 컨퍼런스",
        "link": "https://onoffmix.com/event/206003",
        "time": "13:00~17:00",
        "location": "서울시청"
    },
    {
        "date": "1월 19일(일)",
        "content": "<스타트업 백서> 출간 기념 스타트업 특강",
        "link": "https://event-us.kr/kimkanu/event/14413",
        "time": "14:15~16:00",
        "location": "소셜팩토리 신촌점"
    },
    {
        "date": "1월 20일(월)",
        "content": "Microsoft Cybersecurity Day",
        "link": "https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x9270614abcd&mkt_tok=eyJpIjoiTmpBd01qQmhNR1UxTURFNSIsInQiOiJKMkhjbVc5T2FhR2VieitWT2t6MElGYmZOK2d5K1JZUlhtZFg2Z2oxT2JDQ3F1SVpZVFVvcktZaStcL1RLTDFEdlhQRUw4eE5FSjA0c1BYajQ1ZnpSNTZxWWU0SHE3V1Jid1JRYm9DWWNyeGc5aGFQUXZ1NHNEUnRRU1wvdUtpXC9GUCtkZHlwdE03M0g3U0prWTdKSElYY1E9PSJ9",
        "time": "13:00~17:00",
        "location": "한국마이크로소프트"
    },
    {
        "date": "1월 20일(월)",
        "content": "2020 제1회 SPP파트너스데이:게임 (Facebook X SBA)",
        "link": "https://onoffmix.com/event/206311",
        "time": "14:00~18:00",
        "location": "에스플렉스센터"
    },
    {
        "date": "1월 20일(월)",
        "content": "Microsoft 본사 개발자(Anthony Chu) 대담",
        "link": "https://festa.io/events/853",
        "time": "19:00~21:00",
        "location": "공간더하기(강남역)"
    },
    {
        "date": "1월 21일(화)",
        "content": "AWS Community Day - re:Invent 특집",
        "link": "https://pages.awscloud.com/aws-community-day-seoul-2020.html?&trkCampaign=community-day-seoul&trk=frontend",
        "time": "13:00~17:30",
        "location": "세종대학교 컨벤션"
    },
    {
        "date": "1월 21일(화)",
        "content": "[KISA 핀테크 기술지원센터] 트렌드 세미나 :: 금융클라우드 현재와 앞으로의 변화",
        "link": "https://onoffmix.com/event/206738",
        "time": "15:00~17:00",
        "location": "KISA 핀테크 기술지원센터"
    },
    {
        "date": "1월 21일(화)",
        "content": "에코마인즈 밋업 2020, AI Times",
        "link": "https://event-us.kr/ecominds/event/14397",
        "time": "19:00~22:00",
        "location": "컬쳐랩라운지"
    },
    {
        "date": "1월 21일(화)",
        "content": "Microsoft Ignite The Tour 서울",
        "link": "https://www.microsoft.com/ko-kr/ignite-the-tour/seoul",
        "time": "1월21일~22일",
        "location": "코엑스"
    },
    {
        "date": "1월 22일(수)",
        "content": "네이버 프라이버시 세미나",
        "link": "https://onoffmix.com/event/206163",
        "time": "15:00~17:00",
        "location": "NAVER D2 STARTUP FACTORY"
    },
    {
        "date": "1월 22일(수)",
        "content": "[와디즈] 스타트업 밋업데이",
        "link": "https://onoffmix.com/event/206670",
        "time": "20:00~22:00",
        "location": "판교디지털센터"
    },
    {
        "date": "1월 28일(화)",
        "content": "대한민국의 모든 스타트업 관계자들을 위한 고벤처포럼 1월 모임",
        "link": "https://onoffmix.com/event/205168",
        "time": "17:00~21:00",
        "location": "해성빌딩"
    },
    {
        "date": "1월 30일(목)",
        "content": "[KISA 핀테크 기술지원센터] 트렌드 세미나 :: 경계 무너지는 금융과 IT",
        "link": "https://onoffmix.com/event/206742",
        "time": "16:00~18:00",
        "location": "KISA 핀테크 기술지원센터"
    },
    {
        "date": "1월 31일(금)",
        "content": "[월간 IT 트렌드] 2020 원더키디의 시대, \"일상 속 로봇을 읽다\"",
        "link": "https://www.dreamplus.asia/event/1357",
        "time": "19:00~21:00",
        "location": "드림플러스 강남"
    },
    {
        "date": "2월 6일(목)",
        "content": "[디지털트랜스포메이션-챗봇분야] 2020 AI 챗봇 트렌드 분석",
        "link": "https://www.onoffmix.com/event/204810",
        "time": "14:00~17:00",
        "location": "스파크플러스 선릉3호점"
    },
    {
        "date": "2월 6일(목)",
        "content": "*[인싸 나잇-Fashion Tech 편] 디자이노블 & 비주얼 대표님 특강",
        "link": "https://event-us.kr/dreamplusgangnam/event/14706",
        "time": "19:30~21:00",
        "location": "혜천빌딩 드림플러스"
    },
    {
        "date": "2월 7일(금)",
        "content": "[2월 교육] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/154",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "2월 9일(일)",
        "content": "DNA 1st 데이터 사이언스 컨퍼런스",
        "link": "https://festa.io/events/865",
        "time": "16:00~21:00",
        "location": "백지장 지하철 | 유료(5천)"
    },
    {
        "date": "2월 11일(화)",
        "content": "레드햇 보안 자동화 세미나",
        "link": "https://events.redhat.com/profile/form/index.cfm?PKformID=0x129638abcd&sc_cid=7013a000002DKpXAAW",
        "time": "09:15~15:50",
        "location": "코엑스"
    },
    {
        "date": "2월 11일(화)",
        "content": "Microsoft IoT in Action Event Series 2020",
        "link": "https://iotinactionevents.com/ko/event/seoul?ocid=MSFT_AP_KR_IOTALE_OTH_IASE_3PP_SM_CDS_FB_NA",
        "time": "10:00~18:00",
        "location": "코엑스 인터콘티넨탈"
    },
    {
        "date": "2월 11일(화)",
        "content": "캡클라우드와 텐센트 클라우드가 제안하는 게임, 중국 진출 방안의 재조명",
        "link": "https://biz-event.zdnet.co.kr/agileseminar/",
        "time": "14:00~18:00",
        "location": "포포인츠 바이 쉐라톤 서울"
    },
    {
        "date": "2월 13일(목)",
        "content": "*[세미나] 2020 AI · 빅데이터 활용 로드맵",
        "link": "https://www.ncloud.com/support/edu/162",
        "time": "14:00~17:30",
        "location": "강남N타워"
    },
    {
        "date": "2월 15일(토)",
        "content": "*Langcon2020 : 자연어처리, 데이터에게 길을 묻다",
        "link": "https://festa.io/events/896",
        "time": "09:30~18:30",
        "location": "마이크로소프트 | 유료(2만)"
    },
    {
        "date": "2월 15일(토)",
        "content": "*C++ Korea 2월 미니 세미나",
        "link": "https://festa.io/events/892",
        "time": "13:00~17:00",
        "location": "한국고등교육재단 | 유료(1.1만)"
    },
    {
        "date": "2월 17일(월)",
        "content": "*Elasticsearch Start Up Seminar",
        "link": "https://events.elastic.co/2020-02-17-startupseminar-seoul",
        "time": "19:00~20:30",
        "location": "휴넷 캠퍼스"
    },
    {
        "date": "2월 20일(목)",
        "content": "*Let'Swift 판교 3차",
        "link": "https://festa.io/events/869",
        "time": "19:00~21:30",
        "location": "네이버웹툰 | 유료(1만)"
    },
    {
        "date": "3월 3일(화)",
        "content": "[취소] Google Cloud Gaming & Media Academy",
        "link": "https://docs.google.com/forms/d/e/1FAIpQLSe_Cm3Bd8Y2WoFxW81getk48VLRjyScx5M8DT87JRuem5CJ1w/viewform",
        "time": "13:00~18:00",
        "location": "메가존 빌딩"
    },
    {
        "date": "3월 6일(금)",
        "content": "[취소] [3월] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/158",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "3월 10일(화)",
        "content": "[취소] 2020년 1차 큐브리드 정기교육",
        "link": "https://onoffmix.com/event/209143",
        "time": "3월10일~11일",
        "location": "공개SW개발자센터 | 유료(1만)"
    },
    {
        "date": "3월 15일(일)",
        "content": "[취소] Women TechMakers Seoul 2020",
        "link": "https://www.facebook.com/Women-Techmakers-Korea-473605092834438/",
        "time": "09:00~17:00",
        "location": "코엑스"
    },
    {
        "date": "3월 21일(토)",
        "content": "[취소] 개발들의 개발자 이야기",
        "link": "https://festa.io/events/921",
        "time": "12:00~18:00",
        "location": "한빛미디어 | 유료(1만)"
    },
    {
        "date": "4월 16일(목)",
        "content": "AWS Summit Seoul",
        "link": "https://aws.amazon.com/ko/events/summits/seoul/",
        "time": "4월16일~17일",
        "location": "코엑스"
    },
    {
        "date": "4월 23일(목)",
        "content": "SEOUL VR AR EXPO 2020",
        "link": "http://seoulvrar.com/",
        "time": "4월23일~24일",
        "location": "코엑스"
    },
    {
        "date": "5월 7일(목)",
        "content": "[5월] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/170?page=1",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "5월 12일(화)",
        "content": "Microsoft Power Platform Training Day",
        "link": "https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x10062667abcd&ls=Website&lsd=AzureWebsite",
        "time": "09:00~17:30",
        "location": "다이나믹러닝"
    },
    {
        "date": "5월 14일(목)",
        "content": "2020 PlayX4(플레이엑스포)",
        "link": "https://www.playx4.or.kr/main.do",
        "time": "5월14일~17일",
        "location": "킨텍스"
    },
    {
        "date": "5월 17일(일)",
        "content": "FITT 피트 인사이드 2020 강연 : 스마트 헬스케어 & 피트니스 트렌드와 테크놀로지",
        "link": "https://onoffmix.com/event/207635",
        "time": "12:00~17:30",
        "location": "코엑스 | 유료(2.5만)"
    },
    {
        "date": "5월 19일(화)",
        "content": "AI EXPO KOREA 2020",
        "link": "http://www.aiexpo.co.kr/",
        "time": "5월19일~21일",
        "location": "코엑스"
    },
    {
        "date": "6월 4일(수)",
        "content": "[6월 1차] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/202?page=2",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "6월 8일(월)",
        "content": "[제7차] 양재 빅데이터/인공지능 구축 및 활용 포럼",
        "link": "https://onoffmix.com/event/216046",
        "time": "15:00~18:00",
        "location": "AI양재허브"
    },
    {
        "date": "6월 10일(수)",
        "content": "2020 maum.ai 세미나",
        "link": "https://event-us.kr/maumaiseminar/event/15061",
        "time": "14:00~18:00",
        "location": "대한상공회의소"
    },
    {
        "date": "6월 11일(목)",
        "content": "[6월 Game Class] 1시간 안에 Serverless 게임 만들기",
        "link": "https://www.ncloud.com/support/edu/201",
        "time": "16:00~18:00",
        "location": "강남N타워"
    },
    {
        "date": "6월 12일(금)",
        "content": "[에듀테크 세미나] 기술과 사례로 보는 온라인 교육 서비스의 모든 것",
        "link": "https://www.ncloud.com/support/edu/212?page=2",
        "time": "13:30~16:30",
        "location": "마강남N타워"
    },
    {
        "date": "6월 15일(월)",
        "content": "[코로나 시대의 스타트업] 1. 디지털 뉴딜과 보안 패러다임",
        "link": "https://event-us.kr/startupall/event/18593",
        "time": "14:00~17:00",
        "location": "국회의사당 1세미나실"
    },
    {
        "date": "6월 16일(화)",
        "content": "[6월 2차] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/207?page=2",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "6월 23일(수)",
        "content": "NextRise 2020, Seoul",
        "link": "https://nextrise.imweb.me/",
        "time": "09:00~17:00",
        "location": "코엑스"
    },
    {
        "date": "6월 27일(토)",
        "content": "[6월 Game Meet Up] SATURDAY ON GAMES - '화이트데이' 개발 포스트모템",
        "link": "https://www.ncloud.com/support/edu/222",
        "time": "14:00~16:00",
        "location": "강남N타워"
    },
    {
        "date": "7월 2일(목)",
        "content": "2020 의료기관 개인정보보호&정보보안 컨퍼런스 MPIS 2020",
        "link": "https://www.dailysecu.com/form/register.html?form_id=1578017310",
        "time": "09:00~17:00",
        "location": "한국과학기술회관(역삼동)"
    },
    {
        "date": "7월 3일(금)",
        "content": "[7월 1차] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/225",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "7월 2일(목)",
        "content": "[세미나] 코로나 이후, 사례로 보는 트렌드 리포트",
        "link": "https://www.ncloud.com/support/edu/220",
        "time": "13:50~17:00",
        "location": "강남N타워"
    },
    {
        "date": "7월 6일(월)",
        "content": "SECON 2020",
        "link": "https://www.seconexpo.com/2020/kor/main.asp",
        "time": "7월6일~8일",
        "location": "킨텍스"
    },
    {
        "date": "7월 9일(목)",
        "content": "제16회 블록체인 TechBiz 컨퍼런스",
        "link": "https://www.onoffmix.com/event/218020",
        "time": "14:00~17:30",
        "location": "코엑스"
    },
    {
        "date": "7월 9일(목)",
        "content": "[7월 Game Class] 2시간에 끝내는 게임 개발 A to Z",
        "link": "https://www.ncloud.com/support/edu/227",
        "time": "17:00~19:00",
        "location": "강남N타워"
    },
    {
        "date": "7월 10일(금)",
        "content": "2020 찾아가는 산림빅데이터 설명회",
        "link": "https://onoffmix.com/event/217283",
        "time": "13:00~18:00",
        "location": "산림비전센터"
    },
    {
        "date": "7월 27일(월)",
        "content": "홈브루-판교 직장인, 스타트업 네트워킹 파티",
        "link": "https://onoffmix.com/event/219993",
        "time": "17:30~19:030",
        "location": "판교창조경제밸리"
    },
    {
        "date": "7월 30일(목)",
        "content": "스타트업 CTO가 들려주는 스타트업 개발 사례",
        "link": "https://onoffmix.com/event/219896",
        "time": "19:00~21:00",
        "location": "위워크 역삼역점"
    },
    {
        "date": "8월 2일(일)",
        "content": "FITT 피트 인사이드 2020 강연 : 스마트 헬스케어 & 피트니스 트렌드와 테크놀로지",
        "link": "https://onoffmix.com/event/207635",
        "time": "12:00~17:30",
        "location": "코엑스 | 유료"
    },
    {
        "date": "8월 7일(금)",
        "content": "[8월 1차] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/236",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "8월 13일(목)",
        "content": "[게임 클래스] 8월 게임 클래스 세미나 ‘인게임 데이터 분석 특집’",
        "link": "https://www.ncloud.com/support/edu/241",
        "time": "17:00~19:00",
        "location": "강남N타워"
    },
    {
        "date": "8월 13일(목)",
        "content": "Seoul VR AR EXPO",
        "link": "http://seoulvrar.com/conference/conference_schedule2020/",
        "time": "8월13일~15일",
        "location": "코엑스"
    },
    {
        "date": "8월 25일(화)",
        "content": "[8월 2차] NAVER CLOUD PLATFORM Hands-on Lab",
        "link": "https://www.ncloud.com/support/edu/237",
        "time": "10:00~17:00",
        "location": "강남N타워"
    },
    {
        "date": "9월 2일(수)",
        "content": "GMV 2020",
        "link": "https://www.gmv.or.kr/",
        "time": "9월2일~4일",
        "location": "코엑스"
    },
    {
        "date": "9월 5일(토)",
        "content": "드로이드 나이츠 2020",
        "link": "https://www.wanted.co.kr/events/droidknights2020",
        "time": "13:00~",
        "location": "온라인"
    },
    {
        "date": "9월 7일(월)",
        "content": "2020 IT 솔루션 박람회 : CONTROL OVERFLOW",
        "link": "https://www.openbooth.net/controloverflow",
        "time": "9월7일~13일",
        "location": "온라인"
    },
    {
        "date": "9월 9일(수)",
        "content": "FIDO 얼라이언스 2020 서울 퍼블릭 세미나",
        "link": "https://onoffmix.com/event/221219",
        "time": "09:00~17:30",
        "location": "코엑스"
    },
    {
        "date": "9월 26일(토)",
        "content": "파이콘 한국 2020",
        "link": "https://pycon.kr/2020",
        "time": "9월26~27일",
        "location": "온라인"
    },
    {
        "date": "10월 27일(화)",
        "content": "AI EXPO KOREA 2020",
        "link": "http://www.aiexpo.co.kr/main",
        "time": "10월27일~29일",
        "location": "코엑스"
    }
]