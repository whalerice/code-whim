# `@whalerice/ui`

Code Whim UI 컴포넌트 라이브러리(shadcn/ui 기반). 소스(TypeScript)와 CSS를 그대로 배포합니다.

## 설치

레지스트리와 인증을 설정한 뒤:

```bash
pnpm add @whalerice/ui
```

프로젝트 루트 `.npmrc` 예시:

```ini
@whalerice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

GitHub Packages를 읽으려면 `read:packages` 권한이 있는 토큰이 필요합니다.

## Next.js

`next.config`에 다음을 포함하세요.

```js
transpilePackages: ["@whalerice/ui"],
```

자세한 사용법은 메인 저장소 README를 참고하세요.
