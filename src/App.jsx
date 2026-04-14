import { useState, useEffect, useRef } from "react";

const DEFAULT_WORDS = `[1페이지: 1~28번]
1. tactic : 전술
2. military : 군대의
3. vein : 맥락
4. nanosecond : 나노초
5. deal with : ~을 다루다
6. potential : 잠재력
7. profound : 심오한
8. perspective : 관점
9. springboard : 도약의 발판
10. reflection on : ~에 대한 성찰
11. term : 용어
12. strategy : 전략
13. impose on : ~에 부과하다
14. finite : 유한한
15. eliminate : 제거하다
16. reorient : 바꾸다
17. transform : 바꾸다
18. burden : 부담
19. critique : 비판
20. be inclined to do : ~하는 성향이 있다
21. athlete : (운동)선수
22. owe : (보답으로 무언가를) 해 주어야 한다
23. corresponding : 상응하는
24. be entitled to do : ~할 자격이 있다
25. to put it mildly : 부드럽게 말하자면
26. confidently : 확신에 찬
27. fulfill one's end of the bargain : ~의 의무를 다하다

[2페이지: 29~58번]
29. obligation : 의무, 책임
30. relationship : 관계
31. possess : 가지다, 소지하다
32. mathematically : 수학적으로
33. literate : 문해력이 있는, 글을 읽고 쓸 줄 아는
34. critically : 비판적으로
35. bearing : 관련, 영향
36. interdisciplinary : 범교과적인, 학제 간의
37. mirror : 반영하다, 잘 보여주다
38. mathematical : 수학적인
39. navigate : 탐색하다, 항해하다, 처리하다
40. quantify : 수량화하다
41. societal issue : 사회적 문제
42. informed : 정보에 입각한, 잘 아는
43. innovative : 혁신적인
44. measure : 측정하다
45. estimate : 추산하다
46. conjecture : 추측하다
47. generalize : 일반화하다
48. along with : ~과 함께
49. excuse : 변명
50. classify : 분류하다
51. justify : 근거를 제시하다
52. qualitatively : 질적으로 다른
53. context : 맥락
54. explicitly : 명시적으로
55. convince : 설득하다
56. content : 만족하는
57. consequently : 결과적으로
58. be subject to : ~하기 쉽다

[3페이지: 59~88번]
59. regardless of : ~에 상관없이
60. accompany : 수반하다
61. senseless : 의미 없는, 무의미한
62. control : 통제
63. guilt : 죄책감
64. eliminate : 없애다
65. contentment : 만족
66. resist : 거부하다
67. downgrade : 낮추다
68. maxim : 격언
69. refuse : 거부하다
70. self-assessment : 자기평가
71. equally : 똑같이
72. underestimate : 과소평가하다
73. overestimate : 과대평가하다
74. accurately : 정확하게
75. inward : 내부의, 안의
76. potential : 잠재력
77. self-estimate : 자기평가
78. be capable of : ~을 할 수 있다
79. self-aware : 자신을 인식하는
80. weakness : 약점
81. state : 말하다
82. damaging : 해로운
83. capability : 능력
84. cultivate : 기르다
85. honestly : 정직하게
86. discern : 식별하다, 이해하다
87. generation : 세대
88. high tech : 첨단 기술

[4페이지: 89~118번]
89. convenience : 편리함
90. desire : 욕망
91. patience : 인내심
92. fall prey to : ~의 먹잇감이 되다
93. overnight : 하룻밤 사이에
94. comfort : 편안함
95. tempt : 유혹하다
96. develop : 기르다, 발전시키다
97. achieve : 이루다, 성취하다
98. agriculture : 농업
99. harvesting : 수확
100. pest : 해충
101. essential : 필수적인
102. critical : 중요한
103. stable : 안정적인
104. settle : 정착하다
105. raw : 원자재의
106. soil : 토양
107. biodiversity : 생물 다양성
108. solution : 해결책
109. ensure : 보장하다
110. a range of : 다양한
111. fertilizing : 비료 주기
112. distribute : 분배하다
113. date back : 거슬러 올라가다
114. civilization : 문명
115. supply : 공급
116. vital : 중요한, 치명적인
117. scarcity : 부족
118. degradation : 저하, 악화

[5페이지: 119~148번]
119. sustainable : 지속가능한
120. address : 다루다
121. psychologist : 심리학자
122. empathize : 공감하다
123. exhibit : 보이다
124. trait : 특성
125. perform : 수행하다
126. figure out : 파악하다, 이해하다
127. point of view : 관점, 견해
128. make a suggestion : 제안하다
129. acceptable : 용인되는
130. unreliability : 신뢰할 수 없음
131. introduction : 도입
132. sustainable : 지속 가능한
133. impact : 영향
134. management : 관리
135. resource : 자원
136. nuclear : 핵의
137. accompany : 수반하다
138. profound : 심오한
139. destroy : 소멸시키다, 파괴하다
140. potential : 잠재적인
141. take ~ into account : ~을 고려하다
142. agriculture : 농업
143. advance : 발전, 진보
144. revolution : 혁명
145. assess : 평가하다
146. vivid : 생생한
147. potential : 잠재적인
148. similar to : ~과 유사한

[6페이지: 149~178번]
149. dependence upon : ~에 대한 의존
150. attract : 유혹하다
151. flashy : 화려한
152. refer to : ~을 언급하다
153. obtain : 얻다
154. resource : 자원
155. effectively : 효과적으로
156. draw : 끌어들이다
157. establishment : 가게, 기관, 시설
158. financial : 재정적인
159. offering : 제공물
160. market : 광고하다
161. organism : 생물
162. valuable : 귀중한
163. advertise : 광고하다
164. commitment : 약속
165. predictable : 예측할 수 있는, 예측 가능한
166. thereby : 그렇게 함으로써
167. coordination : 조정
168. agent : 주체, 행위자
169. destination : 목적지
170. construction : 건설
171. be willing to do : 기꺼이 ~하다
172. take a measure : 조치를 취하다
173. currency : 통화
174. institution : 제도
175. stability : 안정성
176. hold together : 결속하다, 결합하다
177. facilitate : 용이하게 하다
178. joint : 공동의

[7페이지: 179~208번]
179. transport : 수송하다, 운반하다
180. afterwards : 나중에
181. credible : 신뢰할 만한
182. notably : 특히
183. sustain : 유지하다
184. in question : 해당하는
185. collaboration : 협력
186. determine : 측정하다, 알아내다, 밝히다
187. mass : 질량
188. compare : 비교하다
189. weigh : 무게가 나가다
190. measure : 측정하다
191. value : 값
192. calculate : 계산하다
193. equation : 방정식
194. unmediated : 중재되지 않은
195. independently : 독립적으로
196. property : 값, 특성, 속성
197. magnitude : 크기, 규모
198. balance : 저울
199. cube : 정육면체
200. complicated : 복잡한
201. roughly : 대략적으로
202. instance : 사례
203. quantity : 수치, 다수, 다량
204. measurement : 측정
205. estimation : 측정, 평가치
206. existing : 기존의, 존재하는
207. determination : 계산, 측정
208. firm : 기업

[8페이지: 209~238번]
209. concentrate on : ~에 집중하다
210. profitable : 수익이 있는
211. moral hazard : 도덕적 해이
212. rescue : 구제하다
213. intervene : 개입하다
214. affect : 영향을 미치다
215. save : 구제하다
216. restructure : 구조를 조정하다
217. in the long term : 장기적으로
218. alter : 바꾸다
219. credit crisis : 금융 위기
220. negatively : 부정적으로
221. risky : 위험한
222. overrate : 과대평가하다
223. in part : 부분적으로
224. so as to do : ~할 만큼
225. implement : 도구
226. fundamental : 근본적인
227. exercise : 발휘하다
228. bottle feeding : 젖병 수유
229. potentially : 잠재적으로
230. entirely : 완전히
231. impact : 영향
232. absorb : 흡수하다
233. invisible : 눈에 보이지 않는
234. transform : 바꾸다
235. classic : 전형적인
236. function : 기능하다
237. substitute for : ~을 대신하다
238. implication : 영향

[9페이지: 239~268번]
239. overlook : 간과하다
240. historian : 역사학자
241. accurate : 정확한
242. progress : 발전
243. play a role in : ~에 역할을 하다
244. stroke : (시계나 종이) 치는 소리
245. contribute : 기여하다
246. commerce : 상업
247. transaction : 거래
248. wholesaler : 도매업자
249. efficient : 효율적인
250. significance : 중요성
251. measurement : 측정
252. mechanical : 기계의, 기계적인
253. peak : 최고점
254. facilitate : 촉진하다
255. interaction : 상호 작용
256. retailer : 소매업자
257. allocate : 분배하다, 할당하다
258. remarkable : 주목할 만한
259. unwind : 긴장을 풀다
260. outcome : 결과
261. inevitable : 피할 수 없는
262. undercut : 약화시키다
263. extent : 정도
264. fantasize : 상상하다
265. objective : 목표
266. obstacle : 장애물
267. temporary : 일시적인
268. advent : 출현

[10페이지: 269~298번]
269. workplace : 직장
270. prediction : 전망, 예측
271. sense : 감지하다
272. survey : 설문 조사
273. executive : 임원, 간부
274. bump : 부딪히다
275. Artificial Intelligence : 인공 지능
276. replace : 대신하다
277. mimic : 모방하다
278. puzzle : 당혹하게 하다
279. take over : 점령하다
280. routine : 일상적인
281. relevance : 적합성, 타당성, 관련성
282. assume : 가정하다
283. more often than not : 대개, 자주
284. embrace : 포용하다, 껴안다
285. executive leadership : 경영 지도자
286. expose : 노출하다
287. excel : 탁월하다
288. ultimately : 결국, 궁극적으로
289. update : 새롭게 하다
290. fast track : 승진 가도, 빠른 길
291. ambitious : 야심에 찬
292. victim : 희생자
293. advance : 발전; 발전시키다
294. integrate : 흡수하다, 통합하다
295. resistant : 저항하는
296. retirement : 은퇴
297. conceivable : 생각할 수 있는
298. solar : 태양의

[11페이지: 299~326번]
299. collapse : 폭락
300. maximize : 극대화하다
301. steep : 가파른
302. add up : 계산이 맞다
303. radiation : 방사선
304. constant : 끊임없는
305. army : 군단
306. installation : 설치
307. exploration : 탐사, 탐험
308. incredibly : 엄청나게
309. launch : 발사하다
310. atmosphere : 대기
311. drop : 하락
312. maintenance : 유지 보수
313. endure : 견디다
314. astronaut : 우주 비행사
315. advanced : 첨단의, 발전된
316. impractical : 비실용적인
317. opt for : ~을 선택하다
318. interest rate : 이율
319. generously : 충분히
320. hold out : 기다리다, 버티다
321. introduction : 도입
322. phenomenon : 현상
323. hyperbolic discounting : 가치 폄하효과
324. be willing to do : 기꺼이 ~하다
325. drawback : 단점
326. sum : 총액

[12페이지: 327~356번]
327. compensate for : ~을 보상하다
328. right away : 즉시
329. figure : 판단하다, 생각하다
330. inconsistent : 일관성 없는
331. immediacy : 즉시성
332. neuroscience : 뇌 과학
333. strive for : ~을 추구하다
334. homeostasis : 항상성
335. compensatory mechanism : 보상 기제
336. cushion : 완화하다, 완충 작용을 하다
337. highs and lows : 변동, 기복
338. be reliant on : ~에 의존하다
339. opposite : 반대의
340. correspondingly : 상응하여
341. miserable : 비참한
342. neutral : 중립적인, 중립의
343. internal : 내부의
344. hinder : 방해하다
345. counteraction : 상쇄 작용
346. ignorance : 무지
347. process : 처리하다
348. be capable of : ~을 할 수 있다
349. balance : 균형, 균형 상태
350. scale : 저울
351. psychiatrist : 정신과 의사
352. component : 구성 요소
353. in turn : 결과적으로, 결국
354. interplay : 상호 작용
355. disruption : 붕괴
356. induce : 유발하다

[13페이지: 357~386번]
357. recognize : 인식하다
358. value : 가치
359. context : 맥락
360. objective : 객관적인
361. viewpoint : 관점
362. independently of : ~와 무관하게
363. tradition : 전통
364. characteristic : 특유한, 특징적인
365. purely : 순전히
366. pursuit : 추구
367. underlying : 근원적인
368. diversity : 다양성
369. similar : 비슷한, 유사한
370. aspire : 열망하다
371. gender : 성별
372. carry out : 수행하다
373. perspective : 관점
374. confidence : 자신감
375. view : 견해
376. maintain : 주장하다
377. solution : 해결책
378. ethnicity : 인종
379. pursue : 추구하다
380. angle : 각도
381. specify : 구체적으로 말하다
382. cognitive : 인지적인
383. negotiate : 협상하다
384. empathetic : 공감적인
385. compassion : 동정심
386. foster : 기르다, 키우다

[14페이지: 387~416번]
387. fulfill : 충족시키다
388. the deaf : 청각 장애인
389. stress : 강조하다
390. emphasize : 강조하다
391. affective : 정서적인
392. concern : 관심
393. consultant : 자문 위원
394. translate : 의미하다
395. the blind : 시각 장애인
396. the color-blind : 색맹
397. device : 장치
398. in spite of : ~에도 불구하고
399. wheeled : 바퀴가 달린
400. baby carriage : 유아차
401. majority : 대다수
402. regular : 단골의, 일반의, 평범한
403. logic : 논리
404. seek : 구하다
405. advertisement : 광고
406. reluctant : 꺼려하는, 마지못해 하는
407. attractive : 매력적인
408. disguise : 변장하다
409. accomplish : 달성하다
410. readily : 기꺼이
411. central : 가장 중요한
412. identity : 정체성
413. anthropologist : 인류학자
414. stand to reason : 당연하다, 도리에 맞다
415. decline : 감소
416. relieve : 경감하다, 해방시키다

[15페이지: 417~444번]
417. responsibility : 책임
418. career : 직업
419. domestic : 가정의
420. shift : 변화
421. spark : 촉발시키다
422. diversify : 다양화하다
423. cuisine : 요리
424. corporation : 기업
425. exclusive : 한정된, 독점적인
426. feed : 먹이다
427. head off : ~을 막다
428. conflict : 갈등
429. dynamics : 역학
430. pursuit : 일, 활동, 취미
431. substantially : 상당히, 많이
432. microwave : 전자레인지
433. trunk : 줄기, 몸통
434. branch : 나뭇가지
435. emerge from : ~에서 나오다
436. stem from : ~에서 나오다
437. innovation : 혁신
438. terms : 용어
439. curriculum : 교육 과정
440. disciplinary : 학문의, 교과의
441. transform : 바꾸다, 변형하다
442. discipline : 학문, 학과목
443. reveal : 밝히다, 드러내다
444. twig : 잔가지

[16페이지: 445~452번]
445. core : 핵심
446. practitioner : 실무자, 종사자
447. link : 연결 고리
448. employ : 사용하다, 쓰다
449. abstract : 추상하다
450. boundary : 경계
451. conception : 개념
452. universal : 보편적인`;

/* ══════════════════ Utilities ══════════════════ */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parseWordsWithPages(text) {
  const lines = text.split("\n");
  const pages = {};
  let currentPage = null;
  const allWords = [];
  const seen = new Set();
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const pm = trimmed.match(/^\[(\d+)페이지/);
    if (pm) { currentPage = parseInt(pm[1]); if (!pages[currentPage]) pages[currentPage] = []; continue; }
    const cleaned = trimmed.replace(/^\d+\.\s*/, "").trim();
    if (!cleaned) continue;
    let eng, kor;
    const si = cleaned.indexOf(" : ");
    const si2 = cleaned.indexOf(" - ");
    if (si !== -1) { eng = cleaned.slice(0, si).trim(); kor = cleaned.slice(si + 3).trim(); }
    else if (si2 !== -1) { eng = cleaned.slice(0, si2).trim(); kor = cleaned.slice(si2 + 3).trim(); }
    else continue;
    if (!eng || !kor) continue;
    const key = eng.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const word = { eng, kor, page: currentPage || 0 };
    allWords.push(word);
    if (currentPage) { if (!pages[currentPage]) pages[currentPage] = []; pages[currentPage].push(word); }
  }
  return { allWords, pages };
}

/*
  ── Korean answer matching ──
  Core idea: normalize both answer and user input by
  1. Removing ~ and parentheses (but keeping parenthesized text as optional)
  2. Normalizing Korean particles (조사) so 을↔를, 은↔는, 이↔가, 와↔과, 에서↔에 etc.
     are treated as equivalent
  3. Splitting comma-separated meanings → any single one is accepted
*/

// Normalize Korean particles to a canonical form
function normalizeJosa(str) {
  return str
    // object markers
    .replace(/을\b/g, "을").replace(/를\b/g, "을")
    // topic markers
    .replace(/은\b/g, "은").replace(/는\b/g, "은")
    // subject markers
    .replace(/이\b/g, "이").replace(/가\b/g, "이")
    // and markers
    .replace(/와\b/g, "와").replace(/과\b/g, "와")
    // location
    .replace(/에서\b/g, "에서")
    // direction/method
    .replace(/으로\b/g, "로")
    // possessive
    .replace(/의\b/g, "의");
}

// Create a "skeleton" of a Korean string for flexible comparison
function korSkeleton(str) {
  return normalizeJosa(
    str
      .replace(/~/g, "")
      .replace(/\s+/g, "")
      .toLowerCase()
  );
}

// Generate all accepted forms of a Korean answer
function generateAccepted(rawKor) {
  const parts = rawKor.split(/[,;]/).map(s => s.trim()).filter(Boolean);
  const accepted = new Set();
  for (const part of parts) {
    // 1. With parenthesized content merged (remove paren chars only)
    const withP = part.replace(/[()]/g, "");
    // 2. Without parenthesized content
    const withoutP = part.replace(/\([^)]*\)/g, "");
    // 3. Raw
    for (const v of [withP, withoutP, part]) {
      const sk = korSkeleton(v);
      if (sk) accepted.add(sk);
    }
  }
  return [...accepted];
}

function checkAnswerKor(userAns, rawKor) {
  const uSkel = korSkeleton(userAns.replace(/[()]/g, ""));
  if (!uSkel) return false;
  const acceptedList = generateAccepted(rawKor);
  return acceptedList.some(a => a === uSkel || uSkel.includes(a) || a.includes(uSkel));
}

function checkAnswerEng(userAns, rawEng) {
  const u = userAns.trim().toLowerCase().replace(/\s+/g, " ");
  const e = rawEng.trim().toLowerCase().replace(/\s+/g, " ");
  return u === e;
}

const COUNTS = [10, 20, 30, 50, 100];

/* ══════════════════ Combo Display ══════════════════ */

function ComboDisplay({ combo, showBurst }) {
  if (combo < 2 && !showBurst) return null;
  const color = combo >= 20 ? "#f59e0b" : combo >= 10 ? "#f97316" : combo >= 5 ? "#ef4444" : "var(--accent)";
  const label = combo >= 30 ? "LEGENDARY" : combo >= 20 ? "UNSTOPPABLE" : combo >= 15 ? "ON FIRE" : combo >= 10 ? "AMAZING" : combo >= 7 ? "GREAT" : combo >= 5 ? "NICE" : combo >= 3 ? "GOOD" : "";
  const scale = Math.min(1 + combo * 0.03, 1.5);
  return (
    <div className="flex flex-col items-center" style={{ transition: "all 0.3s", transform: showBurst ? `scale(${scale})` : "scale(1)" }}>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black" style={{ color, fontFamily: "var(--font-display)", textShadow: combo >= 10 ? `0 0 20px ${color}40` : "none" }}>
          {combo} COMBO
        </span>
        {combo >= 5 && <span style={{ fontSize: combo >= 15 ? "1.5rem" : "1.2rem" }}>{combo >= 20 ? "🔥" : combo >= 10 ? "⚡" : "✨"}</span>}
      </div>
      {label && <span className="text-xs font-bold mt-0.5" style={{ color, opacity: 0.8 }}>{label}</span>}
    </div>
  );
}

/* ══════════════════ Page Selector ══════════════════ */

function PageSelector({ pages, selectedPages, setSelectedPages }) {
  const pageNums = Object.keys(pages).map(Number).sort((a, b) => a - b);
  const toggle = (p) => setSelectedPages((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p].sort((a, b) => a - b));
  const totalSel = selectedPages.reduce((s, p) => s + (pages[p]?.length || 0), 0);
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs" style={{ color: "var(--accent)" }}>{selectedPages.length}개 페이지 · {totalSel}단어</span>
        <div className="flex gap-2">
          <button onClick={() => setSelectedPages([...pageNums])} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ color: "var(--accent)", background: "var(--accent-soft)" }}>전체</button>
          <button onClick={() => setSelectedPages([])} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ color: "var(--fg-dim)", background: "var(--input-bg)" }}>해제</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {pageNums.map((p) => {
          const on = selectedPages.includes(p);
          return (
            <button key={p} onClick={() => toggle(p)} className="py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{ background: on ? "var(--accent)" : "var(--input-bg)", color: on ? "#fff" : "var(--fg-dim)", border: on ? "1.5px solid var(--accent)" : "1.5px solid var(--border)" }}>
              <div>{p}p</div>
              <div className="text-[10px] font-normal mt-0.5" style={{ opacity: 0.7 }}>{pages[p]?.length || 0}개</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════ Input Screen ══════════════════ */

function InputScreen({ onStart }) {
  const [text, setText] = useState(DEFAULT_WORDS);
  const [mode, setMode] = useState("engToKor");
  const [count, setCount] = useState(30);
  const [selectedPages, setSelectedPages] = useState([]);
  const [usePageFilter, setUsePageFilter] = useState(false);
  const [error, setError] = useState("");

  const { allWords, pages } = parseWordsWithPages(text);
  const pageNums = Object.keys(pages).map(Number).sort((a, b) => a - b);
  const hasPages = pageNums.length > 0;
  const filteredWords = usePageFilter && selectedPages.length > 0 ? allWords.filter((w) => selectedPages.includes(w.page)) : allWords;
  const maxCount = filteredWords.length;

  useEffect(() => { if (count > maxCount && maxCount > 0) setCount(maxCount); }, [maxCount]);

  const handleStart = () => {
    if (filteredWords.length < 2) { setError("최소 2개 이상의 단어가 필요합니다."); return; }
    const c = Math.min(count, maxCount);
    onStart(shuffle(filteredWords).slice(0, c), mode);
  };

  const pageLabel = usePageFilter && selectedPages.length > 0
    ? (selectedPages.length === pageNums.length ? "전체" : selectedPages.map((p) => `${p}p`).join(", "))
    : "전체";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4">
      <div className="text-center mb-8 mt-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "var(--accent)", color: "#fff" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h1 className="text-3xl font-bold" style={{ color: "var(--fg)", fontFamily: "var(--font-display)" }}>영단어 퀴즈</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--fg-dim)" }}>단어를 입력하고 퀴즈를 시작하세요</p>
      </div>

      <div className="w-full rounded-2xl p-5 mb-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--fg-dim)" }}>단어 목록 ({allWords.length}개)</label>
        <textarea rows={6} value={text} onChange={(e) => { setText(e.target.value); setError(""); }}
          placeholder={"[1페이지]\ntactic : 전술\nmilitary : 군대의"}
          className="w-full rounded-xl p-4 text-sm resize-none outline-none focus:ring-2"
          style={{ background: "var(--input-bg)", color: "var(--fg)", border: "1px solid var(--border)", fontFamily: "var(--font-mono)", lineHeight: 1.7 }} />
      </div>

      {hasPages && (
        <div className="w-full rounded-2xl p-5 mb-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--fg-dim)" }}>페이지별 출제</label>
            <button onClick={() => { const n = !usePageFilter; setUsePageFilter(n); if (n && selectedPages.length === 0) setSelectedPages([...pageNums]); }}
              className="relative w-11 h-6 rounded-full transition-all" style={{ background: usePageFilter ? "var(--accent)" : "var(--input-bg)", border: "1px solid var(--border)" }}>
              <div className="absolute top-0.5 w-5 h-5 rounded-full transition-all" style={{ background: usePageFilter ? "#fff" : "var(--fg-dim)", left: usePageFilter ? "calc(100% - 22px)" : "2px" }} />
            </button>
          </div>
          {usePageFilter && <PageSelector pages={pages} selectedPages={selectedPages} setSelectedPages={(v) => { setSelectedPages(typeof v === "function" ? v(selectedPages) : v); setError(""); }} />}
        </div>
      )}

      <div className="w-full rounded-2xl p-5 mb-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--fg-dim)" }}>퀴즈 모드</label>
        <div className="flex gap-2 flex-wrap">
          {[{ v: "engToKor", l: "영→한" }, { v: "korToEng", l: "한→영" }, { v: "random", l: "랜덤 혼합" }].map(({ v, l }) => (
            <button key={v} onClick={() => setMode(v)} className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: mode === v ? "var(--accent)" : "var(--input-bg)", color: mode === v ? "#fff" : "var(--fg-dim)", border: mode === v ? "1px solid var(--accent)" : "1px solid var(--border)" }}>{l}</button>
          ))}
        </div>
      </div>

      <div className="w-full rounded-2xl p-5 mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--fg-dim)" }}>
          문제 수 {usePageFilter && selectedPages.length > 0 && <span className="font-normal normal-case ml-1" style={{ color: "var(--accent)" }}>(최대 {maxCount})</span>}
        </label>
        <div className="flex gap-2 flex-wrap">
          {[...COUNTS.filter((n) => n <= maxCount), maxCount > 0 ? maxCount : null].filter((n, i, a) => n && a.indexOf(n) === i).map((n) => (
            <button key={n} onClick={() => setCount(n)} className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: count === n ? "var(--accent)" : "var(--input-bg)", color: count === n ? "#fff" : "var(--fg-dim)", border: count === n ? "1px solid var(--accent)" : "1px solid var(--border)" }}>
              {n === maxCount ? `전체 (${n})` : n}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-4 font-medium" style={{ color: "var(--wrong)" }}>{error}</p>}

      <button onClick={handleStart} className="w-full py-4 rounded-2xl text-lg font-bold transition-all hover:opacity-90 active:scale-[0.98]" style={{ background: "var(--accent)", color: "#fff" }}>
        {usePageFilter && selectedPages.length > 0 ? `퀴즈 시작 — ${pageLabel} (${Math.min(count, maxCount)}문제)` : `퀴즈 시작 (${Math.min(count, maxCount)}문제)`}
      </button>
    </div>
  );
}

/* ══════════════════ Quiz Screen ══════════════════ */

function QuizScreen({ words, globalMode, onFinish, onHome }) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [qModes, setQModes] = useState([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [comboBurst, setComboBurst] = useState(false);
  const inputRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    setQModes(words.map(() => globalMode === "random" ? (Math.random() < 0.5 ? "engToKor" : "korToEng") : globalMode));
  }, [words, globalMode]);

  useEffect(() => { if (!status) setTimeout(() => inputRef.current?.focus(), 50); }, [idx, status]);
  useEffect(() => { if (status) setTimeout(() => nextBtnRef.current?.focus(), 50); }, [status]);

  const total = words.length;
  const word = words[idx];
  const cm = qModes[idx] || "engToKor";
  const hint = cm === "korToEng" ? word.eng[0] + "___" : null;

  const submit = () => {
    if (status) return;
    const isCorrect = cm === "engToKor" ? checkAnswerKor(input, word.kor) : checkAnswerEng(input, word.eng);
    if (isCorrect) {
      const nc = combo + 1;
      setStatus("correct"); setScore(score + 1); setCombo(nc);
      setMaxCombo(Math.max(maxCombo, nc));
      setComboBurst(true); setTimeout(() => setComboBurst(false), 400);
    } else {
      setStatus("wrong"); setCombo(0);
      setWrongList([...wrongList, { ...word, mode: cm, userAnswer: input }]);
    }
  };

  const goNext = () => {
    if (idx + 1 >= total) onFinish(score, wrongList, maxCombo, combo);
    else { setIdx(idx + 1); setInput(""); setStatus(null); }
  };

  const onKey = (e) => { if (e.key === "Enter") { if (!status) submit(); else goNext(); } };

  const progress = ((idx + (status ? 1 : 0)) / total) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto px-4">
      <div className="w-full flex items-center justify-between mb-2 mt-4">
        <div className="flex items-center gap-2">
          <button onClick={onHome} className="p-1.5 rounded-lg transition-all hover:opacity-70 active:scale-90"
            style={{ color: "var(--fg-dim)" }} title="홈으로">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </button>
          <span className="text-xs font-semibold" style={{ color: "var(--fg-dim)" }}>
            {idx + 1} / {total}{word.page ? <span className="ml-1 opacity-60">({word.page}p)</span> : null}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {combo >= 2 && <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: combo >= 10 ? "rgba(245,158,11,0.15)" : "rgba(239,68,68,0.1)", color: combo >= 10 ? "#f59e0b" : "#ef4444" }}>{combo}x</span>}
          <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>{score} 정답</span>
        </div>
      </div>

      <div className="w-full h-2 rounded-full overflow-hidden mb-4" style={{ background: "var(--input-bg)" }}>
        <div className="h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: combo >= 10 ? "#f59e0b" : combo >= 5 ? "#ef4444" : "var(--accent)" }} />
      </div>

      <div className="mb-4" style={{ minHeight: 48 }}>
        <ComboDisplay combo={combo} showBurst={comboBurst} />
      </div>

      <div className="text-xs font-semibold px-3 py-1 rounded-full mb-4"
        style={{ background: cm === "engToKor" ? "rgba(99,102,241,0.12)" : "rgba(234,179,8,0.12)", color: cm === "engToKor" ? "#6366f1" : "#ca8a04" }}>
        {cm === "engToKor" ? "영 → 한" : "한 → 영"}
      </div>

      <div className="w-full rounded-3xl p-8 text-center mb-6 transition-all duration-300"
        style={{
          background: "var(--card)",
          border: status === "correct" ? "2px solid var(--correct)" : status === "wrong" ? "2px solid var(--wrong)" : "1px solid var(--border)",
          boxShadow: status === "correct" ? "0 0 30px rgba(34,197,94,0.12)" : status === "wrong" ? "0 0 30px rgba(239,68,68,0.12)" : "0 4px 24px rgba(0,0,0,0.06)",
        }}>
        <p className="text-3xl font-bold mb-2 break-keep" style={{ color: "var(--fg)", fontFamily: "var(--font-display)", lineHeight: 1.4 }}>
          {cm === "engToKor" ? word.eng : word.kor}
        </p>
        {hint && <p className="text-lg mt-1 font-mono" style={{ color: "var(--fg-dim)" }}>( {hint} )</p>}

        {status === "wrong" && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-xs font-semibold mb-1" style={{ color: "var(--wrong)" }}>정답</p>
            <p className="text-xl font-bold" style={{ color: "var(--fg)" }}>{cm === "engToKor" ? word.kor : word.eng}</p>
            {input && <p className="text-sm mt-2" style={{ color: "var(--fg-dim)" }}>내 답: <span style={{ color: "var(--wrong)", textDecoration: "line-through" }}>{input}</span></p>}
          </div>
        )}
        {status === "correct" && (
          <div className="mt-4 flex items-center justify-center gap-2" style={{ color: "var(--correct)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span className="font-bold">정답!</span>
          </div>
        )}
      </div>

      {!status ? (
        <div className="w-full flex gap-3">
          <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKey}
            placeholder={cm === "engToKor" ? "한글 뜻을 입력하세요" : "영단어를 입력하세요"} autoComplete="off"
            className="flex-1 px-5 py-4 rounded-2xl text-base outline-none focus:ring-2"
            style={{ background: "var(--input-bg)", color: "var(--fg)", border: "1px solid var(--border)" }} />
          <button onClick={submit} className="px-6 py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--accent)", color: "#fff", whiteSpace: "nowrap" }}>확인</button>
        </div>
      ) : status === "correct" ? (
        <button ref={nextBtnRef} onClick={goNext} onKeyDown={onKey}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
          style={{ background: "var(--correct)", color: "#fff" }}>
          {idx + 1 >= total ? "결과 보기" : "다음 문제 →"}
        </button>
      ) : (
        <button ref={nextBtnRef} onClick={goNext} onKeyDown={onKey}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
          style={{ background: "var(--wrong)", color: "#fff" }}>
          확인했습니다
        </button>
      )}
    </div>
  );
}

/* ══════════════════ Result Screen ══════════════════ */

function ResultScreen({ score, total, wrongList, maxCombo, globalMode, onRetry, onHome }) {
  const pct = Math.round((score / total) * 100);
  const [retrying, setRetrying] = useState(false);

  if (retrying) {
    return <QuizScreen words={shuffle(wrongList.map((w) => ({ eng: w.eng, kor: w.kor, page: w.page })))} globalMode={globalMode}
      onHome={() => { setRetrying(false); onHome(); }}
      onFinish={(s, wl, mc) => { setRetrying(false); onRetry(s, wl, mc); }} />;
  }

  let emoji = "🎉", msg = "완벽해요!";
  if (pct < 30) { emoji = "💪"; msg = "다시 도전해보세요!"; }
  else if (pct < 60) { emoji = "📖"; msg = "조금 더 연습하면 돼요!"; }
  else if (pct < 90) { emoji = "👏"; msg = "잘 하고 있어요!"; }
  else if (pct < 100) { emoji = "🔥"; msg = "거의 완벽해요!"; }

  const wrongByPage = {};
  wrongList.forEach((w) => { const p = w.page || 0; if (!wrongByPage[p]) wrongByPage[p] = []; wrongByPage[p].push(w); });

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto px-4 mt-4">
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{emoji}</div>
        <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--fg)", fontFamily: "var(--font-display)" }}>{msg}</h2>
      </div>

      <div className="w-full rounded-3xl p-8 text-center mb-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="text-5xl font-black mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>{pct}%</div>
        <p className="text-sm" style={{ color: "var(--fg-dim)" }}>{total}문제 중 {score}문제 정답</p>
        <div className="w-full h-3 rounded-full overflow-hidden mt-5" style={{ background: "var(--input-bg)" }}>
          <div className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${pct}%`, background: pct >= 80 ? "var(--correct)" : pct >= 50 ? "var(--accent)" : "var(--wrong)" }} />
        </div>
      </div>

      <div className="w-full rounded-2xl p-5 mb-4 flex items-center justify-between" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: maxCombo >= 10 ? "rgba(245,158,11,0.15)" : maxCombo >= 5 ? "rgba(239,68,68,0.1)" : "var(--accent-soft)" }}>
            {maxCombo >= 10 ? "🔥" : maxCombo >= 5 ? "⚡" : "✨"}
          </div>
          <div>
            <div className="text-xs font-semibold" style={{ color: "var(--fg-dim)" }}>최대 콤보</div>
            <div className="text-xl font-black" style={{ color: maxCombo >= 10 ? "#f59e0b" : maxCombo >= 5 ? "#ef4444" : "var(--accent)", fontFamily: "var(--font-display)" }}>
              {maxCombo}x COMBO
            </div>
          </div>
        </div>
        {maxCombo >= 5 && (
          <span className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: maxCombo >= 10 ? "rgba(245,158,11,0.15)" : "rgba(239,68,68,0.1)", color: maxCombo >= 10 ? "#f59e0b" : "#ef4444" }}>
            {maxCombo >= 20 ? "LEGENDARY" : maxCombo >= 15 ? "ON FIRE" : maxCombo >= 10 ? "AMAZING" : "NICE"}
          </span>
        )}
      </div>

      {wrongList.length > 0 && (
        <div className="w-full rounded-2xl p-5 mb-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "var(--wrong)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            틀린 단어 ({wrongList.length}개)
          </h3>
          <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-1">
            {Object.keys(wrongByPage).sort((a, b) => a - b).map((pg) => (
              <div key={pg}>
                {pg !== "0" && <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5 mt-1" style={{ color: "var(--fg-dim)" }}>{pg}페이지</div>}
                <div className="flex flex-col gap-1.5">
                  {wrongByPage[pg].map((w, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 rounded-xl text-sm" style={{ background: "var(--input-bg)" }}>
                      <span className="font-semibold" style={{ color: "var(--fg)" }}>{w.eng}</span>
                      <span style={{ color: "var(--fg-dim)" }}>{w.kor}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex gap-3">
        {wrongList.length > 0 && (
          <button onClick={() => setRetrying(true)} className="flex-1 py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--wrong)", color: "#fff" }}>오답 다시 풀기</button>
        )}
        <button onClick={onHome} className="flex-1 py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
          style={{ background: "var(--accent)", color: "#fff" }}>처음으로</button>
      </div>
    </div>
  );
}

/* ══════════════════ App ══════════════════ */

export default function App() {
  const [screen, setScreen] = useState("input");
  const [words, setWords] = useState([]);
  const [mode, setMode] = useState("engToKor");
  const [result, setResult] = useState(null);
  const [dark, setDark] = useState(true);

  const vars = dark ? {
    "--bg": "#0f1117", "--fg": "#e8eaed", "--fg-dim": "#8b8fa3", "--card": "#181b24", "--border": "#262a36", "--input-bg": "#1e2130",
    "--accent": "#6366f1", "--accent-soft": "rgba(99,102,241,0.14)", "--correct": "#22c55e", "--wrong": "#ef4444",
    "--font-display": "'Noto Sans KR', sans-serif", "--font-body": "'Noto Sans KR', sans-serif", "--font-mono": "'JetBrains Mono', monospace",
  } : {
    "--bg": "#f5f5f7", "--fg": "#1a1a2e", "--fg-dim": "#6b7084", "--card": "#ffffff", "--border": "#e2e4ea", "--input-bg": "#f0f1f5",
    "--accent": "#4f46e5", "--accent-soft": "rgba(79,70,229,0.1)", "--correct": "#16a34a", "--wrong": "#dc2626",
    "--font-display": "'Noto Sans KR', sans-serif", "--font-body": "'Noto Sans KR', sans-serif", "--font-mono": "'JetBrains Mono', monospace",
  };

  return (
    <div style={{ ...vars, background: "var(--bg)", color: "var(--fg)", minHeight: "100vh", fontFamily: "var(--font-body)", transition: "background 0.3s, color 0.3s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <div className="flex justify-end px-4 pt-4">
        <button onClick={() => setDark(!dark)} className="p-2.5 rounded-xl transition-all hover:opacity-80"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--fg-dim)" }}>
          {dark
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
        </button>
      </div>
      <div className="pb-12">
        {screen === "input" && <InputScreen onStart={(w, m) => { setWords(w); setMode(m); setScreen("quiz"); }} />}
        {screen === "quiz" && <QuizScreen words={words} globalMode={mode}
          onHome={() => setScreen("input")}
          onFinish={(s, wl, mc, fc) => { setResult({ score: s, total: words.length, wrongList: wl, maxCombo: Math.max(mc, fc) }); setScreen("result"); }} />}
        {screen === "result" && <ResultScreen score={result.score} total={result.total} wrongList={result.wrongList} maxCombo={result.maxCombo}
          globalMode={mode} onRetry={(s, wl, mc) => setResult({ score: s, total: result.wrongList.length, wrongList: wl, maxCombo: mc })} onHome={() => setScreen("input")} />}
      </div>
    </div>
  );
}
