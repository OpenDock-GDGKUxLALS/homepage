@AGENTS.md

## Next.js 업데이트 규칙

의존성은 패키지마다 `@latest`로 올리지 않는다. 그 시점의 최신 `create-next-app`이 새 프로젝트에 넣는 버전을 그대로 따른다. 각 패키지의 최신 메이저끼리는 서로 호환되지 않을 수 있다(예: TypeScript 7은 typescript-eslint가 아직 지원하지 않는다).

1. `npm pack create-next-app@latest`로 받아 압축을 풀고, `dist/index.js`에서 템플릿이 넣는 버전을 확인한다.
   - `next`, `eslint-config-next`: create-next-app과 같은 버전
   - `react`, `react-dom`: 고정 버전(`const en="..."`)
   - `tailwindcss`, `@tailwindcss/postcss`, `typescript`, `@types/*`, `eslint`: 템플릿에 적힌 값 그대로
2. `package.json`을 그 버전으로 맞춘다. 템플릿에 없는 패키지(`pretendard` 등)만 따로 관리한다.
3. `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`를 `dist/templates/app-tw/ts/`의 같은 파일과 비교하고, 달라진 부분이 있으면 반영한다.
4. `node_modules`와 `package-lock.json`을 지우고 다시 설치한 뒤 `npm run lint`와 `npm run build`가 통과하는지 확인한다.
5. 버전이 바뀌면 `node_modules/next/dist/docs/`의 업그레이드 문서(`01-app/02-guides/upgrading/`)를 읽고, 제거되거나 바뀐 API가 있는지 확인한다.
