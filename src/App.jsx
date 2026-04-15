import { useState, useEffect, useRef } from "react";

const DEFAULT_WORDS = `[1페이지: 1~28번]
1. tactic [n] : 전술
2. military [a] : 군대의
3. vein [n] : 맥락
4. nanosecond [n] : 나노초
5. deal with [v] : ~을 다루다
6. potential [n] : 잠재력
7. profound [a] : 심오한
8. perspective [n] : 관점
9. springboard [n] : 도약의 발판
10. reflection on [n] : ~에 대한 성찰
11. term [n] : 용어
12. strategy [n] : 전략
13. impose on [v] : ~에 부과하다
14. finite [a] : 유한한
15. eliminate [v] : 제거하다
16. reorient [v] : 바꾸다
17. transform [v] : 바꾸다
18. burden [n] : 부담
19. critique [n] : 비판
20. be inclined to do [v] : ~하는 성향이 있다
21. athlete [n] : (운동)선수
22. owe [v] : (보답으로 무언가를) 해 주어야 한다
23. corresponding [a] : 상응하는
24. be entitled to do [v] : ~할 자격이 있다
25. to put it mildly [ad] : 부드럽게 말하자면
26. all that [ad] : 그다지
27. confidently [ad] : 확신에 찬
28. fulfill one's end of the bargain [v] : ~의 의무를 다하다

[2페이지: 29~58번]
29. obligation [n] : 의무, 책임
30. relationship [n] : 관계
31. possess [v] : 가지다, 소지하다
32. mathematically [ad] : 수학적으로
33. literate [a] : 문해력이 있는, 글을 읽고 쓸 줄 아는
34. critically [ad] : 비판적으로
35. bearing [n] : 관련, 영향
36. interdisciplinary [a] : 범교과적인, 학제 간의
37. mirror [v] : 반영하다, 잘 보여주다
38. mathematical [a] : 수학적인
39. navigate [v] : 탐색하다, 항해하다, 처리하다
40. quantify [v] : 수량화하다
41. societal issue [n] : 사회적 문제
42. informed [a] : 정보에 입각한, 잘 아는
43. innovative [a] : 혁신적인
44. measure [v] : 측정하다
45. estimate [v] : 추산하다
46. conjecture [v] : 추측하다
47. generalize [v] : 일반화하다
48. along with [ad] : ~과 함께
49. excuse [n] : 변명
50. classify [v] : 분류하다
51. justify [v] : 근거를 제시하다
52. qualitatively [ad] : 질적으로 다른
53. context [n] : 맥락
54. explicitly [ad] : 명시적으로
55. convince [v] : 설득하다
56. content [a] : 만족하는
57. consequently [ad] : 결과적으로
58. be subject to [v] : ~하기 쉽다

[3페이지: 59~88번]
59. regardless of [ad] : ~에 상관없이
60. accompany [v] : 수반하다
61. senseless [a] : 의미 없는, 무의미한
62. control [n] : 통제
63. guilt [n] : 죄책감
64. eliminate [v] : 없애다
65. contentment [n] : 만족
66. resist [v] : 거부하다
67. downgrade [v] : 낮추다
68. maxim [n] : 격언
69. refuse [v] : 거부하다
70. self-assessment [n] : 자기평가
71. equally [ad] : 똑같이
72. underestimate [v] : 과소평가하다
73. overestimate [v] : 과대평가하다
74. accurately [ad] : 정확하게
75. inward [a] : 내부의, 안의
76. potential [n] : 잠재력
77. self-estimate [n] : 자기평가
78. be capable of [v] : ~을 할 수 있다
79. self-aware [a] : 자신을 인식하는
80. weakness [n] : 약점
81. state [v] : 말하다
82. damaging [a] : 해로운
83. capability [n] : 능력
84. cultivate [v] : 기르다
85. honestly [ad] : 정직하게
86. discern [v] : 식별하다, 이해하다
87. generation [n] : 세대
88. high tech [n] : 첨단 기술

[4페이지: 89~118번]
89. convenience [n] : 편리함
90. desire [n] : 욕망
91. patience [n] : 인내심
92. fall prey to [v] : ~의 먹잇감이 되다
93. overnight [ad] : 하룻밤 사이에
94. comfort [n] : 편안함
95. tempt [v] : 유혹하다
96. develop [v] : 기르다, 발전시키다
97. achieve [v] : 이루다, 성취하다
98. agriculture [n] : 농업
99. harvesting [n] : 수확
100. pest [n] : 해충
101. essential [a] : 필수적인
102. critical [a] : 중요한
103. stable [a] : 안정적인
104. settle [v] : 정착하다
105. raw [a] : 원자재의
106. soil [n] : 토양
107. biodiversity [n] : 생물 다양성
108. solution [n] : 해결책
109. ensure [v] : 보장하다
110. a range of [a] : 다양한
111. fertilizing [n] : 비료 주기
112. distribute [v] : 분배하다
113. date back [v] : 거슬러 올라가다
114. civilization [n] : 문명
115. supply [n] : 공급
116. vital [a] : 중요한, 치명적인
117. scarcity [n] : 부족
118. degradation [n] : 저하, 악화

[5페이지: 119~148번]
119. sustainable [a] : 지속가능한
120. address [v] : 다루다
121. psychologist [n] : 심리학자
122. empathize [v] : 공감하다
123. exhibit [v] : 보이다
124. trait [n] : 특성
125. perform [v] : 수행하다
126. figure out [v] : 파악하다, 이해하다
127. point of view [n] : 관점, 견해
128. make a suggestion [v] : 제안하다
129. acceptable [a] : 용인되는
130. unreliability [n] : 신뢰할 수 없음
131. introduction [n] : 도입
132. sustainable [a] : 지속 가능한
133. impact [n] : 영향
134. management [n] : 관리
135. resource [n] : 자원
136. nuclear [a] : 핵의
137. accompany [v] : 수반하다
138. profound [a] : 심오한
139. destroy [v] : 소멸시키다, 파괴하다
140. potential [a] : 잠재적인
141. take ~ into account [v] : ~을 고려하다
142. agriculture [n] : 농업
143. advance [n] : 발전, 진보
144. revolution [n] : 혁명
145. assess [v] : 평가하다
146. vivid [a] : 생생한
147. potential [a] : 잠재적인
148. similar to [a] : ~과 유사한

[6페이지: 149~178번]
149. dependence upon [n] : ~에 대한 의존
150. attract [v] : 유혹하다
151. flashy [a] : 화려한
152. refer to [v] : ~을 언급하다
153. obtain [v] : 얻다
154. resource [n] : 자원
155. effectively [ad] : 효과적으로
156. draw [v] : 끌어들이다
157. establishment [n] : 가게, 기관, 시설
158. financial [a] : 재정적인
159. offering [n] : 제공물
160. market [v] : 광고하다
161. organism [n] : 생물
162. valuable [a] : 귀중한
163. advertise [v] : 광고하다
164. commitment [n] : 약속
165. predictable [a] : 예측할 수 있는, 예측 가능한
166. thereby [ad] : 그렇게 함으로써
167. coordination [n] : 조정
168. agent [n] : 주체, 행위자
169. destination [n] : 목적지
170. construction [n] : 건설
171. be willing to do [v] : 기꺼이 ~하다
172. take a measure [v] : 조치를 취하다
173. currency [n] : 통화
174. institution [n] : 제도
175. stability [n] : 안정성
176. hold together [v] : 결속하다, 결합하다
177. facilitate [v] : 용이하게 하다
178. joint [a] : 공동의

[7페이지: 179~208번]
179. transport [v] : 수송하다, 운반하다
180. afterwards [ad] : 나중에
181. credible [a] : 신뢰할 만한
182. notably [ad] : 특히
183. sustain [v] : 유지하다
184. in question [a] : 해당하는
185. collaboration [n] : 협력
186. determine [v] : 측정하다, 알아내다, 밝히다
187. mass [n] : 질량
188. compare [v] : 비교하다
189. weigh [v] : 무게가 나가다
190. measure [n] : 측정
191. value [n] : 값
192. calculate [v] : 계산하다
193. equation [n] : 방정식
194. unmediated [a] : 중재되지 않은
195. independently [ad] : 독립적으로
196. property [n] : 값, 특성, 속성
197. magnitude [n] : 크기, 규모
198. balance [n] : 저울
199. cube [n] : 정육면체
200. complicated [a] : 복잡한
201. roughly [ad] : 대략적으로
202. instance [n] : 사례
203. quantity [n] : 수치, 다수, 다량
204. measurement [n] : 측정
205. estimation [n] : 측정, 평가치
206. existing [a] : 기존의, 존재하는
207. determination [n] : 계산, 측정
208. firm [n] : 기업

[8페이지: 209~238번]
209. concentrate on [v] : ~에 집중하다
210. profitable [a] : 수익이 있는
211. moral hazard [n] : 도덕적 해이
212. rescue [v] : 구제하다
213. intervene [v] : 개입하다
214. affect [v] : 영향을 미치다
215. save [v] : 구제하다
216. restructure [v] : 구조를 조정하다
217. in the long term [ad] : 장기적으로
218. alter [v] : 바꾸다
219. credit crisis [n] : 금융 위기
220. negatively [ad] : 부정적으로
221. risky [a] : 위험한
222. overrate [v] : 과대평가하다
223. in part [ad] : 부분적으로
224. so as to do [ad] : ~할 만큼
225. implement [n] : 도구
226. fundamental [a] : 근본적인
227. exercise [v] : 발휘하다
228. bottle feeding [n] : 젖병 수유
229. potentially [ad] : 잠재적으로
230. entirely [ad] : 완전히
231. impact [n] : 영향
232. absorb [v] : 흡수하다
233. invisible [a] : 눈에 보이지 않는
234. transform [v] : 바꾸다
235. classic [a] : 전형적인
236. function [v] : 기능하다
237. substitute for [v] : ~을 대신하다
238. implication [n] : 영향

[9페이지: 239~268번]
239. overlook [v] : 간과하다
240. historian [n] : 역사학자
241. accurate [a] : 정확한
242. progress [n] : 발전
243. play a role in [v] : ~에 역할을 하다
244. stroke [n] : (시계나 종이) 치는 소리
245. contribute [v] : 기여하다
246. commerce [n] : 상업
247. transaction [n] : 거래
248. wholesaler [n] : 도매업자
249. efficient [a] : 효율적인
250. significance [n] : 중요성
251. measurement [n] : 측정
252. mechanical [a] : 기계의, 기계적인
253. peak [n] : 최고점
254. facilitate [v] : 촉진하다
255. interaction [n] : 상호 작용
256. retailer [n] : 소매업자
257. allocate [v] : 분배하다, 할당하다
258. remarkable [a] : 주목할 만한
259. unwind [v] : 긴장을 풀다
260. outcome [n] : 결과
261. inevitable [a] : 피할 수 없는
262. undercut [v] : 약화시키다
263. extent [n] : 정도
264. fantasize [v] : 상상하다
265. objective [n] : 목표
266. obstacle [n] : 장애물
267. temporary [a] : 일시적인
268. advent [n] : 출현

[10페이지: 269~298번]
269. workplace [n] : 직장
270. prediction [n] : 전망, 예측
271. sense [v] : 감지하다
272. survey [n] : 설문 조사
273. executive [n] : 임원, 간부
274. bump [v] : 부딪히다
275. Artificial Intelligence [n] : 인공 지능
276. replace [v] : 대신하다
277. mimic [v] : 모방하다
278. puzzle [v] : 당혹하게 하다
279. take over [v] : 점령하다
280. routine [a] : 일상적인
281. relevance [n] : 적합성, 타당성, 관련성
282. assume [v] : 가정하다
283. more often than not [ad] : 대개, 자주
284. embrace [v] : 포용하다, 껴안다
285. executive leadership [n] : 경영 지도자
286. expose [v] : 노출하다
287. excel [v] : 탁월하다
288. ultimately [ad] : 결국, 궁극적으로
289. update [v] : 새롭게 하다
290. fast track [n] : 승진 가도, 빠른 길
291. ambitious [a] : 야심에 찬
292. victim [n] : 희생자
293. advance [v] : 발전시키다
294. integrate [v] : 흡수하다, 통합하다
295. resistant [a] : 저항하는
296. retirement [n] : 은퇴
297. conceivable [a] : 생각할 수 있는
298. solar [a] : 태양의

[11페이지: 299~326번]
299. collapse [n] : 폭락
300. maximize [v] : 극대화하다
301. steep [a] : 가파른
302. add up [v] : 계산이 맞다
303. radiation [n] : 방사선
304. constant [a] : 끊임없는
305. army [n] : 군단
306. installation [n] : 설치
307. exploration [n] : 탐사, 탐험
308. incredibly [ad] : 엄청나게
309. launch [v] : 발사하다
310. atmosphere [n] : 대기
311. drop [n] : 하락
312. maintenance [n] : 유지 보수
313. endure [v] : 견디다
314. astronaut [n] : 우주 비행사
315. advanced [a] : 첨단의, 발전된
316. impractical [a] : 비실용적인
317. opt for [v] : ~을 선택하다
318. interest rate [n] : 이율
319. generously [ad] : 충분히
320. hold out [v] : 기다리다, 버티다
321. introduction [n] : 도입
322. phenomenon [n] : 현상
323. hyperbolic discounting [n] : 가치 폄하효과
324. be willing to do [v] : 기꺼이 ~하다
325. drawback [n] : 단점
326. sum [n] : 총액

[12페이지: 327~356번]
327. compensate for [v] : ~을 보상하다
328. right away [ad] : 즉시
329. figure [v] : 판단하다, 생각하다
330. inconsistent [a] : 일관성 없는
331. immediacy [n] : 즉시성
332. neuroscience [n] : 뇌 과학
333. strive for [v] : ~을 추구하다
334. homeostasis [n] : 항상성
335. compensatory mechanism [n] : 보상 기제
336. cushion [v] : 완화하다, 완충 작용을 하다
337. highs and lows [n] : 변동, 기복
338. be reliant on [v] : ~에 의존하다
339. opposite [a] : 반대의
340. correspondingly [ad] : 상응하여
341. miserable [a] : 비참한
342. neutral [a] : 중립적인, 중립의
343. internal [a] : 내부의
344. hinder [v] : 방해하다
345. counteraction [n] : 상쇄 작용
346. ignorance [n] : 무지
347. process [v] : 처리하다
348. be capable of [v] : ~을 할 수 있다
349. balance [n] : 균형, 균형 상태
350. scale [n] : 저울
351. psychiatrist [n] : 정신과 의사
352. component [n] : 구성 요소
353. in turn [ad] : 결과적으로, 결국
354. interplay [n] : 상호 작용
355. disruption [n] : 붕괴
356. induce [v] : 유발하다

[13페이지: 357~386번]
357. recognize [v] : 인식하다
358. value [n] : 가치
359. context [n] : 맥락
360. objective [a] : 객관적인
361. viewpoint [n] : 관점
362. independently of [ad] : ~와 무관하게
363. tradition [n] : 전통
364. characteristic [a] : 특유한, 특징적인
365. purely [ad] : 순전히
366. pursuit [n] : 추구
367. underlying [a] : 근원적인
368. diversity [n] : 다양성
369. similar [a] : 비슷한, 유사한
370. aspire [v] : 열망하다
371. gender [n] : 성별
372. carry out [v] : 수행하다
373. perspective [n] : 관점
374. confidence [n] : 자신감
375. view [n] : 견해
376. maintain [v] : 주장하다
377. solution [n] : 해결책
378. ethnicity [n] : 인종
379. pursue [v] : 추구하다
380. angle [n] : 각도
381. specify [v] : 구체적으로 말하다
382. cognitive [a] : 인지적인
383. negotiate [v] : 협상하다
384. empathetic [a] : 공감적인
385. compassion [n] : 동정심
386. foster [v] : 기르다, 키우다

[14페이지: 387~416번]
387. fulfill [v] : 충족시키다
388. the deaf [n] : 청각 장애인
389. stress [v] : 강조하다
390. emphasize [v] : 강조하다
391. affective [a] : 정서적인
392. concern [n] : 관심
393. consultant [n] : 자문 위원
394. translate [v] : 의미하다
395. the blind [n] : 시각 장애인
396. the color-blind [n] : 색맹
397. device [n] : 장치
398. in spite of [ad] : ~에도 불구하고
399. wheeled [a] : 바퀴가 달린
400. baby carriage [n] : 유아차
401. majority [n] : 대다수
402. regular [a] : 단골의, 일반의, 평범한
403. logic [n] : 논리
404. seek [v] : 구하다
405. advertisement [n] : 광고
406. reluctant [a] : 꺼려하는, 마지못해 하는
407. attractive [a] : 매력적인
408. disguise [v] : 변장하다
409. accomplish [v] : 달성하다
410. readily [ad] : 기꺼이
411. central [a] : 가장 중요한
412. identity [n] : 정체성
413. anthropologist [n] : 인류학자
414. stand to reason [v] : 당연하다, 도리에 맞다
415. decline [n] : 감소
416. relieve [v] : 경감하다, 해방시키다

[15페이지: 417~444번]
417. responsibility [n] : 책임
418. career [n] : 직업
419. domestic [a] : 가정의
420. shift [n] : 변화
421. spark [v] : 촉발시키다
422. diversify [v] : 다양화하다
423. cuisine [n] : 요리
424. corporation [n] : 기업
425. exclusive [a] : 한정된, 독점적인
426. feed [v] : 먹이다
427. head off [v] : ~을 막다
428. conflict [n] : 갈등
429. dynamics [n] : 역학
430. pursuit [n] : 일, 활동, 취미
431. substantially [ad] : 상당히, 많이
432. microwave [n] : 전자레인지
433. trunk [n] : 줄기, 몸통
434. branch [n] : 나뭇가지
435. emerge from [v] : ~에서 나오다
436. stem from [v] : ~에서 나오다
437. innovation [n] : 혁신
438. terms [n] : 용어
439. curriculum [n] : 교육 과정
440. disciplinary [a] : 학문의, 교과의
441. transform [v] : 바꾸다, 변형하다
442. discipline [n] : 학문, 학과목
443. reveal [v] : 밝히다, 드러내다
444. twig [n] : 잔가지

[16페이지: 445~452번]
445. core [n] : 핵심
446. practitioner [n] : 실무자, 종사자
447. link [n] : 연결 고리
448. employ [v] : 사용하다, 쓰다
449. abstract [v] : 추상하다
450. boundary [n] : 경계
451. conception [n] : 개념
452. universal [a] : 보편적인`;

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
  const rawWords = [];
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
    const posMatch = eng.match(/^(.+?)\s*\[([a-z]+)\]\s*$/);
    const baseEng = posMatch ? posMatch[1].trim() : eng;
    const pos = posMatch ? posMatch[2] : null;
    rawWords.push({ eng: baseEng, kor, pos, page: currentPage || 0 });
  }
  const groups = {};
  for (const w of rawWords) {
    const key = w.eng.toLowerCase() + "|" + (w.pos || "");
    if (!groups[key]) groups[key] = { ...w, korList: [w.kor] };
    else {
      const existingSkels = groups[key].korList.map(k => korSkeleton(k));
      const newSkel = korSkeleton(w.kor);
      if (!existingSkels.some(s => s === newSkel)) groups[key].korList.push(w.kor);
    }
  }
  const allWords = [];
  const seen = new Set();
  for (const w of rawWords) {
    const key = w.eng.toLowerCase() + "|" + (w.pos || "");
    if (seen.has(key)) continue;
    seen.add(key);
    const group = groups[key];
    const word = { eng: w.eng, kor: group.korList.join(", "), pos: w.pos, page: w.page };
    allWords.push(word);
    if (w.page && pages[w.page]) pages[w.page].push(word);
  }
  return { allWords, pages };
}

function normalizeJosa(str) {
  return str.replace(/를\b/g, "을").replace(/는\b/g, "은").replace(/가\b/g, "이").replace(/과\b/g, "와").replace(/으로\b/g, "로");
}
function korSkeleton(str) {
  return normalizeJosa(str.replace(/~/g, "").replace(/\s+/g, "").toLowerCase());
}
function generateAccepted(rawKor) {
  const parts = rawKor.split(/[,;]/).map(s => s.trim()).filter(Boolean);
  const accepted = new Set();
  for (const part of parts) {
    for (const v of [part.replace(/[()]/g, ""), part.replace(/\([^)]*\)/g, ""), part]) {
      const sk = korSkeleton(v);
      if (sk) accepted.add(sk);
    }
  }
  return [...accepted];
}
function checkAnswerKor(userAns, rawKor) {
  const uSkel = korSkeleton(userAns.replace(/[()]/g, ""));
  if (!uSkel) return false;
  return generateAccepted(rawKor).some(a => a === uSkel || uSkel.includes(a) || a.includes(uSkel));
}
function checkAnswerEng(userAns, rawEng) {
  return userAns.trim().toLowerCase().replace(/\s+/g, " ") === rawEng.trim().toLowerCase().replace(/\s+/g, " ");
}
function generateHint(eng) {
  return eng.replace(/[a-zA-Z]+/g, (m) => m[0] + "___");
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
        <span className="text-2xl font-black" style={{ color, fontFamily: "var(--font-display)", textShadow: combo >= 10 ? `0 0 20px ${color}40` : "none" }}>{combo} COMBO</span>
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
    onStart(shuffle(filteredWords).slice(0, Math.min(count, maxCount)), mode);
  };
  const pageLabel = usePageFilter && selectedPages.length > 0 ? (selectedPages.length === pageNums.length ? "전체" : selectedPages.map((p) => `${p}p`).join(", ")) : "전체";

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
  const [status, setStatus] = useState(null); // null | 'correct' | 'wrong'
  const [score, setScore] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [qModes, setQModes] = useState([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [comboBurst, setComboBurst] = useState(false);
  // History for go-back feature
  const [history, setHistory] = useState([]); // [{word, mode, status, userAnswer}]
  const [reviewing, setReviewing] = useState(false); // are we looking at a past question?
  const [reviewIdx, setReviewIdx] = useState(0);
  const inputRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    setQModes(words.map(() => globalMode === "random" ? (Math.random() < 0.5 ? "engToKor" : "korToEng") : globalMode));
  }, [words, globalMode]);

  useEffect(() => { if (!status && !reviewing) setTimeout(() => inputRef.current?.focus(), 50); }, [idx, status, reviewing]);
  useEffect(() => { if (status && !reviewing) setTimeout(() => nextBtnRef.current?.focus(), 50); }, [status, reviewing]);

  const total = words.length;
  const word = words[idx];
  const cm = qModes[idx] || "engToKor";
  const hint = cm === "korToEng" ? generateHint(word.eng) : null;

  const submit = () => {
    if (status || reviewing) return;
    const isCorrect = cm === "engToKor" ? checkAnswerKor(input, word.kor) : checkAnswerEng(input, word.eng);
    if (isCorrect) {
      const nc = combo + 1;
      setStatus("correct"); setScore(score + 1); setCombo(nc);
      setMaxCombo(Math.max(maxCombo, nc));
      setComboBurst(true); setTimeout(() => setComboBurst(false), 400);
      setHistory([...history, { word, mode: cm, status: "correct", userAnswer: input }]);
    } else {
      setStatus("wrong"); setCombo(0);
      setWrongList([...wrongList, { ...word, mode: cm, userAnswer: input }]);
      setHistory([...history, { word, mode: cm, status: "wrong", userAnswer: input }]);
    }
  };

  const goNext = () => {
    if (reviewing) { setReviewing(false); return; }
    if (idx + 1 >= total) onFinish(score, wrongList, maxCombo, combo);
    else { setIdx(idx + 1); setInput(""); setStatus(null); }
  };

  const goPrev = () => {
    if (reviewing) {
      if (reviewIdx > 0) setReviewIdx(reviewIdx - 1);
      else setReviewing(false); // go back to current question
    } else if (history.length > 0) {
      setReviewing(true);
      setReviewIdx(history.length - 1);
    }
  };

  const goNextReview = () => {
    if (reviewIdx < history.length - 1) setReviewIdx(reviewIdx + 1);
    else setReviewing(false); // back to current question
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      if (reviewing) goNext();
      else if (!status) submit();
      else goNext();
    }
  };

  const progress = ((idx + (status ? 1 : 0)) / total) * 100;

  // Review mode: show past question
  if (reviewing) {
    const h = history[reviewIdx];
    const rWord = h.word;
    const rCm = h.mode;
    return (
      <div className="flex flex-col items-center w-full max-w-xl mx-auto px-4">
        <div className="w-full flex items-center justify-between mb-2 mt-4">
          <div className="flex items-center gap-2">
            <button onClick={onHome} className="p-1.5 rounded-lg transition-all hover:opacity-70 active:scale-90" style={{ color: "var(--fg-dim)" }} title="홈으로">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </button>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--input-bg)", color: "var(--fg-dim)" }}>
              복습 {reviewIdx + 1} / {history.length}
            </span>
          </div>
        </div>

        <div className="w-full h-2 rounded-full overflow-hidden mb-8" style={{ background: "var(--input-bg)" }}>
          <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "var(--accent)", opacity: 0.4 }} />
        </div>

        <div className="text-xs font-semibold px-3 py-1 rounded-full mb-4"
          style={{ background: rCm === "engToKor" ? "rgba(99,102,241,0.12)" : "rgba(234,179,8,0.12)", color: rCm === "engToKor" ? "#6366f1" : "#ca8a04" }}>
          {rCm === "engToKor" ? "영 → 한" : "한 → 영"}
        </div>

        <div className="w-full rounded-3xl p-8 text-center mb-6"
          style={{
            background: "var(--card)",
            border: h.status === "correct" ? "2px solid var(--correct)" : "2px solid var(--wrong)",
            boxShadow: h.status === "correct" ? "0 0 30px rgba(34,197,94,0.12)" : "0 0 30px rgba(239,68,68,0.12)",
          }}>
          {rCm === "engToKor" ? (
            <p className="text-3xl font-bold mb-2 break-keep" style={{ color: "var(--fg)", fontFamily: "var(--font-display)", lineHeight: 1.4 }}>
              {rWord.eng}{rWord.pos && <span className="text-lg font-semibold ml-2" style={{ color: "var(--fg-dim)" }}>[{rWord.pos}]</span>}
            </p>
          ) : (
            <>
              <p className="text-3xl font-bold mb-2 break-keep" style={{ color: "var(--fg)", fontFamily: "var(--font-display)", lineHeight: 1.4 }}>{rWord.kor}</p>
              {rWord.pos && <p className="text-sm mb-2" style={{ color: "var(--fg-dim)" }}>[{rWord.pos}]</p>}
            </>
          )}

          <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-xs font-semibold mb-1" style={{ color: h.status === "correct" ? "var(--correct)" : "var(--wrong)" }}>
              {h.status === "correct" ? "정답" : "오답 — 정답"}
            </p>
            <p className="text-xl font-bold" style={{ color: "var(--fg)" }}>{rCm === "engToKor" ? rWord.kor : rWord.eng}</p>
            {h.userAnswer && (
              <p className="text-sm mt-2" style={{ color: "var(--fg-dim)" }}>
                내 답: <span style={{ color: h.status === "correct" ? "var(--correct)" : "var(--wrong)", textDecoration: h.status === "wrong" ? "line-through" : "none" }}>{h.userAnswer}</span>
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex gap-3">
          {reviewIdx > 0 && (
            <button onClick={goPrev} className="px-6 py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--input-bg)", color: "var(--fg-dim)", border: "1px solid var(--border)" }}>
              ←
            </button>
          )}
          <button ref={nextBtnRef} onClick={goNextReview} onKeyDown={onKey}
            className="flex-1 py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "var(--accent)", color: "#fff" }}>
            {reviewIdx < history.length - 1 ? "다음 복습 →" : "현재 문제로 돌아가기"}
          </button>
        </div>
      </div>
    );
  }

  // Normal quiz mode
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto px-4">
      <div className="w-full flex items-center justify-between mb-2 mt-4">
        <div className="flex items-center gap-2">
          <button onClick={onHome} className="p-1.5 rounded-lg transition-all hover:opacity-70 active:scale-90" style={{ color: "var(--fg-dim)" }} title="홈으로">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </button>
          {history.length > 0 && (
            <button onClick={goPrev} className="p-1.5 rounded-lg transition-all hover:opacity-70 active:scale-90" style={{ color: "var(--fg-dim)" }} title="이전 문제 보기">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          )}
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
        {cm === "engToKor" ? (
          <p className="text-3xl font-bold mb-2 break-keep" style={{ color: "var(--fg)", fontFamily: "var(--font-display)", lineHeight: 1.4 }}>
            {word.eng}{word.pos && <span className="text-lg font-semibold ml-2" style={{ color: "var(--fg-dim)" }}>[{word.pos}]</span>}
          </p>
        ) : (
          <>
            <p className="text-3xl font-bold mb-2 break-keep" style={{ color: "var(--fg)", fontFamily: "var(--font-display)", lineHeight: 1.4 }}>{word.kor}</p>
            {word.pos && <p className="text-sm mb-2" style={{ color: "var(--fg-dim)" }}>[{word.pos}]</p>}
          </>
        )}
        {hint && <p className="text-lg mt-1 font-mono" style={{ color: "var(--fg-dim)" }}>( {hint} )</p>}

        {/* Show answer for both correct and wrong */}
        {status && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-xs font-semibold mb-1" style={{ color: status === "correct" ? "var(--correct)" : "var(--wrong)" }}>
              {status === "correct" ? "정답" : "오답 — 정답"}
            </p>
            <p className="text-xl font-bold" style={{ color: "var(--fg)" }}>{cm === "engToKor" ? word.kor : word.eng}</p>
            {input && status === "wrong" && (
              <p className="text-sm mt-2" style={{ color: "var(--fg-dim)" }}>내 답: <span style={{ color: "var(--wrong)", textDecoration: "line-through" }}>{input}</span></p>
            )}
            {status === "correct" && (
              <div className="mt-2 flex items-center justify-center gap-1" style={{ color: "var(--correct)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                <span className="text-sm font-bold">맞았습니다!</span>
              </div>
            )}
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
    return <QuizScreen words={shuffle(wrongList.map((w) => ({ eng: w.eng, kor: w.kor, pos: w.pos, page: w.page })))} globalMode={globalMode}
      onHome={() => { setRetrying(false); onHome(); }} onFinish={(s, wl, mc) => { setRetrying(false); onRetry(s, wl, mc); }} />;
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
            <div className="text-xl font-black" style={{ color: maxCombo >= 10 ? "#f59e0b" : maxCombo >= 5 ? "#ef4444" : "var(--accent)", fontFamily: "var(--font-display)" }}>{maxCombo}x COMBO</div>
          </div>
        </div>
        {maxCombo >= 5 && <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: maxCombo >= 10 ? "rgba(245,158,11,0.15)" : "rgba(239,68,68,0.1)", color: maxCombo >= 10 ? "#f59e0b" : "#ef4444" }}>
          {maxCombo >= 20 ? "LEGENDARY" : maxCombo >= 15 ? "ON FIRE" : maxCombo >= 10 ? "AMAZING" : "NICE"}</span>}
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
                      <span className="font-semibold" style={{ color: "var(--fg)" }}>{w.eng}{w.pos && <span className="ml-1 font-normal" style={{ color: "var(--fg-dim)" }}>[{w.pos}]</span>}</span>
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
          {dark ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
        </button>
      </div>
      <div className="pb-12">
        {screen === "input" && <InputScreen onStart={(w, m) => { setWords(w); setMode(m); setScreen("quiz"); }} />}
        {screen === "quiz" && <QuizScreen words={words} globalMode={mode} onHome={() => setScreen("input")}
          onFinish={(s, wl, mc, fc) => { setResult({ score: s, total: words.length, wrongList: wl, maxCombo: Math.max(mc, fc) }); setScreen("result"); }} />}
        {screen === "result" && <ResultScreen score={result.score} total={result.total} wrongList={result.wrongList} maxCombo={result.maxCombo}
          globalMode={mode} onRetry={(s, wl, mc) => setResult({ score: s, total: result.wrongList.length, wrongList: wl, maxCombo: mc })} onHome={() => setScreen("input")} />}
      </div>
    </div>
  );
}