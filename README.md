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

단일 레포의 `@/components/ui/...` 예시와 달리, 이 저장소에서는 **`@workspace/ui`** 로 가져옵니다.

```tsx
import { Button } from "@workspace/ui/components/button"
```

Radix 계열 중 **`Tooltip`** 처럼 `TooltipProvider`가 필요한 컴포넌트는 `apps/web/app/layout.tsx` 등 최상단 레이아웃에서 한 번 감싸 주세요. (설치 후 CLI 안내 문구 참고.)

스타일은 웹 앱 레이아웃에서 이미 불러오는 경우가 많습니다.

```tsx
import "@workspace/ui/globals.css"
```
