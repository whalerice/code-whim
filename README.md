# Next.js monorepo (shadcn/ui)

Turbo 기반 모노레포입니다. 앱은 `apps/web`, 공유 UI는 `packages/ui`에 둡니다.

## 요구 사항

- **Node.js** 22 이상 (`package.json`의 `engines` 참고)
- **pnpm** 10.x — Corepack 사용 시 루트의 `packageManager` 필드와 맞춰집니다.

```bash
corepack enable
```

## 시작하기

저장소 루트에서:

```bash
pnpm install
pnpm dev
```

웹 앱은 기본적으로 **http://localhost:9000** 에서 뜹니다 (`apps/web`의 `next dev -p 9000`).

빌드·타입체크 등은 루트 스크립트를 사용합니다.

| 명령              | 설명              |
| ----------------- | ----------------- |
| `pnpm dev`        | Turbo로 개발 서버 |
| `pnpm build`      | 전체 빌드         |
| `pnpm lint`       | 린트              |
| `pnpm typecheck`  | 타입 검사         |
| `pnpm format`     | Prettier 포맷     |

## 디렉터리 구조

| 경로             | 역할                                       |
| ---------------- | ------------------------------------------ |
| `apps/web`       | Next.js 앱 (App Router)                    |
| `packages/ui`    | shadcn/ui 컴포넌트·글로벌 스타일           |
| `packages/*`     | ESLint·TypeScript 등 공유 설정 패키지      |

## shadcn 컴포넌트 추가

CLI는 웹 앱 기준 경로를 넘기고, 소스는 UI 패키지로 생성되도록 `-c apps/web` 을 붙입니다.

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

생성 위치는 보통 `packages/ui/src/components` 입니다 (`components.json` 설정에 따름).

### 앱에서 import

단일 레포의 `@/components/ui/...` 예시와 달리, 이 저장소에서는 **`@whalerice/ui`** 로 가져옵니다.

```tsx
import { Button } from "@whalerice/ui/components/button"
```

Radix 계열 중 **`Tooltip`** 처럼 `TooltipProvider`가 필요한 컴포넌트는 `apps/web/app/layout.tsx` 등 최상단 레이아웃에서 한 번 감싸 주세요. (설치 후 CLI 안내 문구 참고.)

스타일은 웹 앱 레이아웃에서 이미 불러오는 경우가 많습니다.

```tsx
import "@whalerice/ui/globals.css"
```

## GitHub Packages (`@whalerice/ui`)

`packages/ui`는 **GitHub Packages** (`npm.pkg.github.com`)에 게시할 수 있습니다. 패키지 이름은 **`@whalerice/ui`** 입니다.

### 다른 프로젝트에서 설치

프로젝트 루트 `.npmrc`:

```ini
@whalerice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

`GITHUB_TOKEN` 대신 `read:packages` 권한이 있는 GitHub PAT를 넣어도 됩니다.

```bash
pnpm add @whalerice/ui
```

Next.js 앱에서는 `next.config`에 `transpilePackages: ["@whalerice/ui"]` 를 포함하세요.

### 게시

1. [packages/ui/package.json](packages/ui/package.json)에서 **`version`을 올린 뒤** 커밋·푸시합니다.
2. GitHub에서 **Release**를 만들거나, Actions에서 **Publish @whalerice/ui to GitHub Packages** 워크플로를 **workflow_dispatch**로 실행합니다.

로컬에서 게시할 때도 동일한 레지스트리·토큰 설정이 필요합니다:

```bash
pnpm publish:ui
```
