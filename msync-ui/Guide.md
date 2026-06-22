# Respect read-only thread

> Hi, this thread is read only. No edits to be made on the repo or any file in the computer.

Understood — I’ll keep this thread strictly read-only.
- No file edits
- No repo changes
- No staging, commits, or branch operations
- I can still inspect code, explain behavior, review architecture, or suggest patches as text

What would you like me to analyze?

> Alright, so I'll give you context.
> # Context
>
> I'm building a personal project called mSync, a self-hosted music streaming platform.
>
> The project is NOT intended to become a startup or a Spotify competitor. Its purpose is to improve my backend engineering skills, increase my hireability for backend engineering roles, and give me a project I can confidently discuss in interviews.
>
> I am a backend engineer with several years of experience in backend development, infrastructure, deployments, databases and cloud tooling, but I have very little experience building complete full-stack web applications end-to-end.
>
> ## Project Goal
>
> Build a music streaming web application where users can:
>
> * Upload their own songs
> * Stream songs across devices
> * Create playlists
> * Search songs
> * Synchronize playback between devices later on
>
> The focus is backend engineering.
>
> ---
>
> ## Proposed Architecture
>
> Frontend:
>
> * Next.js
> * Simple UI only
> * Presentation layer only
>
> Backend:
>
> * Rust
> * Owns all business logic
> * Authentication
> * Uploads
> * Streaming
> * Metadata
> * Playlist management
> * Synchronization
> * APIs
>
> Database:
>
> * PostgreSQL
>
> Repository:
>
> * Single repository (monorepo structure)
> * ui/
> * server/
> * migrations/
> * docs/
>
> The architecture should remain simple.
>
> ---
>
> ## Extremely Important Constraints
>
> My biggest weakness is overengineering and getting distracted.
>
> I tend to:
>
> * Learn entire technologies instead of building
> * Create unnecessary architecture
> * Add extra services too early
> * Introduce complexity for hypothetical future scale
> * Chase interesting rabbit holes
>
> Please actively prevent me from doing this.
>
> When I ask questions, default toward simpler solutions.
>
> Challenge unnecessary complexity.
>
> If my idea is overengineered, explicitly tell me.
>
> ---
>
> ## Decision-Making Principles
>
> Always optimize for:
>
> * Shipping
> * Simplicity
> * Momentum
> * Completion
>
> Do NOT optimize for:
>
> * Perfection
> * Infinite scalability
> * Premature optimization
> * Fancy architecture
>
> Assume this project will initially have only a handful of users.
>
> ---
>
> ## Need-To-Know Rule
>
> Help me distinguish between:
>
> Need to know:
>
> * Information required to unblock the current feature
>
> Nice to know:
>
> * Interesting information that can be postponed
>
> If I start drifting into nice-to-know topics, call it out.
>
> ---
>
> ## How I want answers
>
> When I ask technical questions:
>
> 1. Tell me the standard industry approach.
> 2. Tell me the simplest approach.
> 3. Tell me if I am overengineering.
> 4. Explain tradeoffs.
> 5. Recommend one path and explain why.
>
> Avoid giving 10 equally weighted options unless necessary.
>
> Act more like a pragmatic senior engineer than a documentation generator.

Perfect — this is a very good framing, and I’ll optimize my help around it.

What I’ll do:
- Default to the simplest architecture that ships
- Push back on premature abstractions and extra services
- Separate `need to know` from `nice to know`
- Recommend one practical path instead of dumping options
- Bias toward backend depth, with just enough frontend to support it

What I’ll assume unless you say otherwise:
- Single repo is fine
- `Next.js + Rust + PostgreSQL` is a strong, sensible stack
- One deployable backend service is preferred
- A handful of users means simplicity beats scalability work

What I’ll call out explicitly:
- If something is overengineered
- If a decision is mostly interview theater vs real value
- If you’re drifting into research instead of building

How I’ll answer technical questions:
- Standard industry approach
- Simplest approach
- Whether it’s overengineering
- Key tradeoffs
- Clear recommendation

This project goal makes sense for interviews, especially if you can clearly explain:
- API design
- auth
- uploads/storage
- streaming/range requests
- schema design
- background jobs only where truly needed
- deployment and observability

You’ve set the right constraint: this is a backend portfolio project, not a future Spotify.

Send me the first decision or feature, and I’ll help you keep it brutally practical.

> Alright. So currently I want to know 2 things, firstly have i put favicons in the right place (public dir) or should i make a subfolder there, is that standard? And secondly, i want to use constants, is that a good practise? By that i mean as you can see in layout.tsx I'm defining a title, i want it to come from a single file so that there are as little raw values in code as possible, good idea?

<details><summary>10 previous messages</summary>

> I’ll quickly inspect the app structure and `layout.tsx` before advising.
>
> <details><summary>Explored a search, ran a command</summary>
>
> <details><summary>Explored a search</summary>
>
> - Searched for `*/public/*` in `.`
>
> </details>
>
> - Ran `pwd && rg --files -g 'AGENTS.md' -g 'app/layout.tsx' -g 'src/app/layout.tsx' -g 'public/*'`
>
> </details>
>
> I found the frontend app; next I’m reading its local instructions and `layout.tsx`.
>
> <details><summary>Explored 2 files</summary>
>
> - Read `./msync-ui/AGENTS.md`
> - Read `./msync-ui/app/layout.tsx`
>
> </details>
>
> I’ve got the current files; now I’m checking Next’s local docs for favicon conventions.
>
> <details><summary>Explored a search, a list</summary>
>
> - Listed files in `docs`
> - Searched for `favicon|apple-icon|manifest|metadata` in `docs`
>
> </details>
>
> I found the relevant docs. I’m reading the icon and metadata conventions now.
>
> <details><summary>Explored 2 files</summary>
>
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md`
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`
>
> </details>
>
> I’ve got enough context; I’m pulling line numbers so I can point precisely.
>
> <details><summary>Explored a file</summary>
>
> - Read `./msync-ui/app/layout.tsx`
>
> </details>
</details>

Yes — you should simplify this.

**Favicons**
- **Standard industry approach:** In modern Next app-router apps, prefer Next’s metadata file conventions: put `favicon.ico` at `app/`, and `icon.*` / `apple-icon.*` in `app/` too. Next will generate the `<link>` tags for you.
- **Simplest approach:** If you keep files in `public`, that is still fine — but reference them as root paths like `/favicon.ico`, not `/public/favicon.ico`.
- **What’s wrong right now:** In `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:32`, `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:34`, `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:35`, `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:37`, and `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:39`, the `href`s use `/public/...`, which is not the standard public URL shape in Next.
- **Subfolder or not?** Don’t make a subfolder unless you actually need organization. For a tiny app, root-level `public` is normal and simpler.
- **Overengineering check:** Creating a `public/icons/` folder just for “cleanliness” is borderline unnecessary right now.

**Constants**
- **Standard industry approach:** Centralize shared app-level config/branding values that are reused in multiple places.
- **Simplest approach:** Make one small `site` config file for values like app name, default title, description, maybe tagline.
- **Not a good goal:** “As little raw values in code as possible” is too extreme. Don’t extract every string into constants. Extract repeated or important values, not everything.
- **What I see now:** You currently have duplicate title sources in `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:15` and `/Users/millifylovesmilfs/Git/msync/msync-ui/app/layout.tsx:31`. That’s worth fixing conceptually.
- **Better Next pattern:** Prefer `metadata` as the single source of truth for title/description instead of manually adding `<title>` inside `<head>`.

**Tradeoffs**
- **Shared config file:** Better consistency, easier renames, slightly more indirection.
- **Inline literals:** Faster to read locally, but duplicates drift over time.
- **Extract everything:** Feels “clean” at first, usually becomes noisy and harder to navigate.

**Recommendation**
- Put app-wide branding in one small config object.
- Use Next `metadata` as the main source for title/description.
- Keep favicons either:
    - in `app/` using Next file conventions, or
    - in `public/` with root paths like `/favicon.ico`.
- Do **not** create extra folders or a big constants system yet.

If you want, I can next review your ideal minimal `site config + metadata` structure without editing anything.

> How would i use constants? DO I create a ts file and use it everywhere? Also give a standard relevant project file hierarchy for me, skip the "single dev, keep it minimal" part and give me ideal shape. Go a step further and give me the same for other folders too. Ofcourse it is a single dev so if there are multiple possibilities and the standard is different from what is ideal for me explain that so that i know so

Yes — create a `.ts` file, but don’t call everything “constants”.

**Constants**
- **Standard industry approach:** separate **config**, **constants**, and **env**.
- **Simplest approach:** make one file like `ui/src/config/site.ts` for app identity values.
- **Overengineering warning:** a giant `constants.ts` with every string in the app is bad practice.
- **Recommendation:** use:
    - `config` for app-wide branding/settings
    - `constants` for true fixed values like limits, MIME types, route names
    - `env` for deployment-specific values

Example:
```ts
// ui/src/config/site.ts
export const siteConfig = {
  name: "mSync",
  title: "mSync - Music by you",
  description: "Self-hosted music streaming",
} as const;
```

Use it in Next metadata:
```ts
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
};
```

Good rule:
- used in **1 file only** → keep inline
- used in **2+ places** or is core branding → extract
- changes by environment → env var
- belongs to one feature → keep near that feature

Do **not** make a global dump like:
- `APP_NAME`
- `LOGIN_BUTTON_TEXT`
- `HOME_HEADER_TEXT`
- `EMPTY_STATE_TEXT`
  unless they are genuinely shared.

**Recommended UI files**
```text
ui/
  app/
    layout.tsx
    page.tsx
    globals.css
    login/
      page.tsx
    library/
      page.tsx
    playlists/
      page.tsx
    songs/
      [id]/
        page.tsx
  components/
    ui/
    layout/
    player/
  features/
    auth/
      components/
      api.ts
      types.ts
    songs/
      components/
      api.ts
      types.ts
    playlists/
      components/
      api.ts
      types.ts
  lib/
    api-client.ts
    utils.ts
    format.ts
  config/
    site.ts
    routes.ts
  hooks/
  types/
  public/
    favicon.ico
    apple-touch-icon.png
    icon.png
    images/
      logo.png
      placeholder-album.png
  tests/
  package.json
  tsconfig.json
  next.config.ts
```

**What goes where in UI**
- `app/` → routes and layouts only
- `components/` → reusable generic UI
- `features/` → feature-specific frontend code
- `lib/` → helpers and API client
- `config/` → site config, routes, nav items
- `public/` → files served by URL directly
- `types/` → shared TS types used across UI

**Recommended server files**
```text
server/
  src/
    main.rs
    config/
      mod.rs
      settings.rs
    http/
      mod.rs
      router.rs
      middleware/
      handlers/
        health.rs
        auth.rs
        songs.rs
        playlists.rs
        search.rs
        streaming.rs
      dto/
    domain/
      auth/
        mod.rs
        service.rs
        model.rs
      songs/
        mod.rs
        service.rs
        model.rs
        repository.rs
      playlists/
        mod.rs
        service.rs
        model.rs
        repository.rs
      users/
      search/
      sync/
    db/
      mod.rs
      pool.rs
      models/
    storage/
      mod.rs
      local.rs
    errors/
      mod.rs
      app_error.rs
    telemetry/
      mod.rs
      logging.rs
      tracing.rs
  tests/
    api/
    integration/
  Cargo.toml
```

**What goes where in server**
- `config/` → env loading, settings structs
- `http/handlers/` → thin request handlers
- `http/dto/` → request/response shapes
- `domain/` → business logic by feature
- `db/` → DB pool and persistence helpers
- `storage/` → file storage abstraction
- `errors/` → app errors
- `telemetry/` → logging/tracing

**Migrations / docs**
```text
migrations/
  0001_init.sql
  0002_users.sql
  0003_songs.sql
  0004_playlists.sql
  0005_playlist_items.sql
```

```text
docs/
  architecture.md
  api.md
  schema.md
  deployment.md
  decisions/
    0001-monorepo.md
    0002-local-file-storage.md
```

**Standard vs ideal for you**
- **Standard larger-team monorepo:** `apps/ui`, `apps/server`, maybe `packages/shared`
- **Ideal for you now:** keep `ui/`, `server/`, `migrations/`, `docs/` at root
- **Why:** `packages/shared` is standard in bigger setups, but premature for your project unless you truly share code

**My recommendation**
- Use a small `site.ts` config file now.
- Avoid a global `constants.ts` dumping ground.
- Keep your root structure as:
```text
ui/
server/
migrations/
docs/
```
- Inside those folders, use the feature-oriented shape above.

If you want, I can next give you a **final recommended exact tree for mSync v1** with no fluff — just the structure I’d actually choose for this project.

> No thanks, this is good enough. I appreciate the thought. Next I want a react and nextjs primer, like I don't know anything about these. But I'm going to build a UI in them, I don't want to spend hours gulping content, i want headings with very short info on how its useful to me and i can look inside myself. I want enough info to get started with building a single page in react and serve it with next but i also need to know some basics about them both to know what tools i got. Optimal coverage of features would be great but good enough coverage works too. I can spend 15 minutes reading so i think the word limit is high enough.

<details><summary>4 previous messages</summary>

> I’ll tailor this to your installed Next version and keep it tight.
>
> <details><summary>Explored 3 files</summary>
>
> - Read `./msync-ui/package.json`
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/01-getting-started/index.md`
>
> </details>
>
> I’m grabbing one more bit on server vs client components, since that’s the main React/Next mental model.
>
> <details><summary>Explored 2 files</summary>
>
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
> - Read `./msync-ui/node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md`
>
> </details>
</details>

Here’s the **backend-engineer-friendly primer**.

You’re using **React 19 + Next 16**, so I’ll explain the modern app-router model, not old tutorial-era Next.

**The Big Picture**
- **React** = how you build UI out of components.
- **Next.js** = framework around React that gives you routing, server rendering, layouts, metadata, asset handling, and deployment conventions.
- For you: **React builds the page**, **Next serves and structures the app**.

**What You Need To Know First**
- A React app is a tree of **components**.
- A component is just a function that returns UI.
- Next turns files like `app/page.tsx` into routes.
- In modern Next, components are **server-first by default**.
- You only use client-side React features when you need interactivity.

**React: Core Mental Model**
- **Component**: reusable UI function.
    - Useful to you: split page into `Header`, `SongList`, `UploadForm`, `PlaylistCard`.
- **Props**: data passed into a component.
    - Useful to you: pass `song`, `playlist`, `userName`.
- **State**: local changing data inside a component.
    - Useful to you: search box text, modal open/closed, selected tab.
- **Render**: React calls your component and turns returned JSX into UI.
    - Useful to you: UI is a function of data.

**JSX**
- JSX is “HTML-like syntax inside TypeScript”.
- Example idea:
    - `<SongCard title="..." />`
- It’s just syntax for building UI trees.
- Useful to you: most React code is just TypeScript + JSX.

**Props vs State**
- **Props** come from parent.
- **State** lives inside component.
- Rule of thumb:
    - If parent owns it, use props.
    - If the component itself changes it, use state.

**React Hooks**
- **`useState`**: local interactive state.
    - Useful: search input, dropdown, player open state.
- **`useEffect`**: run code after render for browser-side effects.
    - Useful: listen to key presses, sync with localStorage, timers.
- **`useMemo` / `useCallback`**: performance helpers.
    - Nice to know, not needed now.
- **Custom hooks**: reusable logic.
    - Useful later: `useAudioPlayer`, `useDebouncedSearch`.

**When React Becomes “Interactive”**
- Buttons, forms, inputs, toggles, tabs, modals need client-side React.
- Static content does not.
- This matters because Next defaults to server components.

**React Events**
- `onClick`, `onChange`, `onSubmit` are how UI responds to user input.
- Useful to you: upload form, playlist creation form, search box.

**Conditional Rendering**
- Show different UI based on data:
    - loading
    - empty state
    - error
    - populated content
- Useful to you: this is most real app UI.

**Lists**
- Rendering arrays is fundamental.
- Useful to you: songs, playlists, search results.

**React Rules You Must Know**
- Components must be **pure-ish**: return UI from inputs/state.
- Don’t mutate state directly.
- Hooks must be called at top level, not inside conditions or loops.

**Next.js: What It Adds**
- **File-based routing**
- **Layouts**
- **Server rendering**
- **Metadata**
- **Static assets**
- **Navigation**
- **API integration patterns**

For you, the biggest value is: **less setup, more structure**.

**Next App Router**
- `app/page.tsx` = `/`
- `app/library/page.tsx` = `/library`
- `app/songs/[id]/page.tsx` = dynamic route like `/songs/123`
- Useful to you: URL structure comes from folders.

**Pages**
- A `page.tsx` file renders one route.
- Useful to you: build one screen at a time.

**Layouts**
- A `layout.tsx` wraps pages.
- Good for navbar, page shell, fonts, metadata.
- Useful to you: shared UI without repetition.

**Server Components**
- In Next app router, pages/layouts are server components by default.
- They render on the server.
- They can fetch data safely.
- They do **not** use browser-only hooks like `useState` unless marked client.
- Useful to you: fetch backend data without shipping unnecessary JS.

**Client Components**
- Add `"use client"` at the top when you need:
    - `useState`
    - `useEffect`
    - event handlers
    - browser APIs like `window`, `localStorage`
- Useful to you: forms, search input, audio controls, toggles.

**Best Mental Model for Next**
- **Server component** = get data and render most of the page.
- **Client component** = small interactive islands inside the page.

That is the most important modern Next concept.

**Data Flow in Your App**
- Next page fetches data from your Rust backend.
- It passes data into presentational components.
- Interactive components handle local user actions.
- Those actions call your backend again when needed.

**Navigation**
- Use Next’s `Link` component for internal links.
- It gives better transitions and prefetching.
- Useful to you: page-to-page navigation feels faster without extra work.

**Metadata**
- Next has a built-in metadata API for title, description, icons, etc.
- Useful to you: don’t manually manage `<head>` everywhere.

**Static Assets**
- Files in `public/` are served from root URLs.
- Useful to you: logos, icons, placeholder images.

**Styling**
- You likely have Tailwind in this project.
- React/Next do not force styling strategy.
- Useful to you: just pick one and move on.
- Recommendation: use Tailwind or plain CSS modules; don’t spend time evaluating styling ecosystems.

**Rendering Modes You Should Know**
- **Static**: page can be prepared ahead of time.
- **Dynamic**: page is rendered per request.
- For your app, many logged-in pages will behave dynamically.
- Nice to know, not urgent for your first page.

**Loading UI**
- Next supports `loading.tsx` for route-level loading states.
- Useful later for slower pages.
- Not required for your first screen.

**Forms**
- In React, form inputs usually use state.
- In Next, forms can still just call your backend API normally.
- Useful to you: keep it boring—submit to backend, show success/error, refresh data.

**A Good First-Page Shape**
- `app/page.tsx`
    - fetch some backend data or render placeholder content
    - render page shell
- `components/layout/header.tsx`
- `components/songs/song-list.tsx`
- `components/songs/song-card.tsx`
- `components/search/search-box.tsx` with `"use client"` if interactive

**How To Think While Building**
- Ask: “Does this need browser interaction?”
    - **No** → server component
    - **Yes** → client component
- Ask: “Is this shared between pages?”
    - **Yes** → layout or reusable component
- Ask: “Is this route-specific?”
    - **Yes** → keep it near that page

**What Tools You Have**
- React gives you:
    - components
    - props
    - state
    - events
    - effects
    - composition
- Next gives you:
    - routing
    - layouts
    - server/client split
    - metadata
    - `Link`
    - asset serving
    - page structure conventions

**What You Can Ignore For Now**
- Context API unless prop drilling becomes annoying
- Suspense deep-dives
- server actions
- advanced caching
- render optimization
- memoization
- custom webpack/turbopack stuff
- edge runtime
- complex state libraries like Redux/Zustand

Those are mostly **nice to know**, not **need to know**.

**Overengineering Check**
- Don’t start by building a “component system”.
- Don’t create abstractions before two real usages.
- Don’t invent a frontend architecture before page one exists.
- Don’t add global state until local state actually hurts.

**Minimal Vocabulary You Should Recognize**
- **Hydration**: browser attaching interactivity to rendered HTML
- **SSR**: server-side rendering
- **RSC**: React Server Components
- **Client component**: browser-interactive component
- **Route**: URL mapped from files
- **Layout**: shared wrapper around pages
- **Props**: inputs to components
- **State**: changing local UI data

**Best Way For You To Start**
- Build one page with:
    - title/header
    - a list of fake songs
    - a search input
    - one button
- Use:
    - one server page
    - one client search component
    - a couple presentational components
- That will teach you 80% of what you need.

**My Recommendation**
- Learn React and Next **by building one page**, not by studying them separately.
- Your immediate need-to-know is:
    - components
    - props
    - state
    - event handlers
    - `use client`
    - `app/page.tsx`
    - `app/layout.tsx`
    - `Link`
    - metadata
- Everything else can wait.

If you want, next I can give you a **single-page React + Next crash course in code form**: the smallest realistic page broken into 5 files and explained line by line.

> A few follow up questions, give me primer for HTML CSS, JS, JSX and TSX. Because I have forgotten most of them. I know what html is, css is, a bit of js, and nothing about jsx, tsx and ofcourse most concepts that are being touched or will be touched by me here. Concise level but good enough coverage of this information would be great. Also for react what is browser interactivity? What does it really mean and hence why i can decide to use server or client components?

Absolutely. Here’s the **practical refresher**, aimed at “enough to build UI without disappearing into tutorials.”

**HTML**
- HTML defines the **structure and meaning** of a page.
- Think: headings, paragraphs, buttons, forms, lists, images, links.
- Common tags:
    - `div` = generic container
    - `h1`–`h6` = headings
    - `p` = paragraph
    - `button` = clickable button
    - `input` = text/file/etc input
    - `form` = grouped inputs for submission
    - `ul` / `li` = lists
    - `img` = image
    - `a` = link
- Why useful to you:
    - Every React component ultimately returns HTML-like structure.

**HTML mental model**
- Use the most meaningful tag available.
- Example:
    - page title → `h1`
    - nav links → `nav`
    - song list → `ul` + `li`
    - upload form → `form`

**CSS**
- CSS controls **presentation**: layout, spacing, colors, typography, sizing.
- Main things you’ll use:
    - `display`
    - `margin` / `padding`
    - `width` / `height`
    - `color` / `background`
    - `font-size`
    - `border`
- Layout basics:
    - `display: flex` = one-dimensional layout, great for rows/columns
    - `display: grid` = two-dimensional layout
- Why useful to you:
    - CSS makes raw HTML usable and readable.

**CSS mental model**
- HTML = structure
- CSS = appearance
- JS/React = behavior

**CSS concepts you’ll actually touch**
- **Class**: reusable style name attached to elements
- **Box model**:
    - content
    - padding
    - border
    - margin
- **Flexbox**:
    - align items in row/column
    - good for navbars, cards, lists
- **Responsive design**:
    - make layout work on smaller screens
- For your app:
    - you mostly need spacing, flex, widths, colors, hover states

**JavaScript**
- JavaScript adds **logic and behavior**.
- Core things you need:
    - variables
    - objects
    - arrays
    - functions
    - conditionals
    - loops / array methods
    - async/await
- Example uses in UI:
    - handle button click
    - transform song data
    - submit form
    - fetch backend data

**JS concepts that matter most**
- **Object**
```js
const song = { id: 1, title: "Track", artist: "Me" };
```
- **Array**
```js
const songs = [song1, song2];
```
- **Function**
```js
function formatTitle(title) {
  return title.toUpperCase();
}
```
- **Array mapping**
```js
songs.map(song => song.title)
```
- **Async**
```js
const response = await fetch("/api/songs");
```

**JavaScript in frontend terms**
- Reads data
- transforms data
- reacts to user actions
- updates UI state
- talks to backend APIs

**JSX**
- JSX is a syntax that lets you write **HTML-like UI inside JavaScript/TypeScript**.
- Example:
```jsx
<h1>Hello</h1>
```
- That is not raw HTML. It becomes JavaScript that React understands.
- Why useful to you:
    - React components return JSX.

**JSX rules you need**
- Must return one tree root:
```jsx
<div>...</div>
```
or
```jsx
<>
  ...
</>
```
- Use `{}` to put JavaScript inside JSX:
```jsx
<h1>{song.title}</h1>
```
- Attributes look like HTML, but some names differ:
    - `className` instead of `class`
    - `htmlFor` instead of `for`
- Self-closing tags:
```jsx
<input />
<img />
```

**JSX example**
```jsx
function SongCard({ song }) {
  return (
    <div>
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
    </div>
  );
}
```

**TSX**
- TSX = JSX + TypeScript.
- It is what you’ll write in `page.tsx`, `layout.tsx`, and React components.
- Why useful to you:
    - same UI syntax as JSX, but with type safety.

**TypeScript**
- TypeScript is JavaScript plus **types**.
- It helps catch mistakes earlier.
- Common examples:
```ts
const title: string = "mSync";
const count: number = 3;
```

**TypeScript concepts you need**
- **Type annotations**
```ts
function greet(name: string) {
  return `Hello ${name}`;
}
```
- **Object types**
```ts
type Song = {
  id: string;
  title: string;
  artist: string;
};
```
- **Props typing**
```ts
function SongCard({ song }: { song: Song }) {
  return <div>{song.title}</div>;
}
```
- **Optional fields**
```ts
type Song = {
  title: string;
  album?: string;
};
```

**TSX example**
```tsx
type Song = {
  id: string;
  title: string;
  artist: string;
};

function SongCard({ song }: { song: Song }) {
  return (
    <div>
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
    </div>
  );
}
```

**How They Fit Together**
- HTML = page structure
- CSS = styling
- JS = logic
- JSX = UI syntax inside JS
- TypeScript = typed JS
- TSX = typed React UI files

**React: What “Browser Interactivity” Means**
It means the UI must **respond live in the browser after the page has loaded**.

Examples:
- clicking a button changes something immediately
- typing in a search box updates results/live state
- opening/closing a modal
- toggling play/pause
- tracking selected tab
- reading `localStorage`
- reacting to timers, keypresses, scroll, resize
- using browser APIs like `window`, `document`, `audio`, `navigator`

That is interactivity.

**What is not browser interactivity**
- rendering a page from data
- showing a static list of songs
- showing a playlist fetched from server
- rendering a profile page from backend response

Those can be rendered on the server and sent as HTML.

**Server vs Client Components**
Use this rule:

- **Server component** when the component:
    - fetches data
    - renders static UI
    - does not need click handlers/state/effects/browser APIs

- **Client component** when the component:
    - needs `useState`
    - needs `useEffect`
    - needs `onClick`, `onChange`, `onSubmit`
    - needs `window`, `localStorage`, audio APIs, etc.

**Why this split exists**
- Server components:
    - run on server
    - send less JS to browser
    - are good for data fetching and initial render
- Client components:
    - run in browser
    - enable live interaction
    - cost more JS

So the question is:
- “Does this need to *do things in the user’s browser*?”
    - yes → client
    - no → server

**Examples for mSync**
- **Server component**
    - page that fetches songs from Rust backend and renders them
- **Client component**
    - search input with live filtering
    - audio player controls
    - upload progress UI
    - theme toggle
    - modal for creating playlist

**Best mental model**
- Server component = “prepare and render UI”
- Client component = “interactive widget running in browser”

**Simple Example**
- `SongsPage`
    - fetches songs
    - renders header and list
    - server component
- `SearchBox`
    - tracks input text
    - filters UI as user types
    - client component
- `PlayButton`
    - handles click and browser audio state
    - client component

**Decision Shortcut**
Ask these in order:
- Does it need local state?
- Does it need event handlers?
- Does it need `window`, `document`, `localStorage`, audio, timers?
- Does it need effects after render?

If yes to any: client component.

If no:
- keep it server-side by default.

**Need To Know**
- HTML: structure
- CSS: layout and style
- JS: data + behavior
- JSX/TSX: React UI syntax
- TypeScript: typing props/data
- Interactivity = browser-side live behavior
- Server vs client choice depends on whether browser-side behavior is needed

**Nice To Know Later**
- advanced CSS
- closures deep dive
- event loop internals
- React reconciliation
- Suspense internals
- rendering optimization

**Recommendation**
- Don’t study these in isolation for long.
- Learn them while building one page:
    - structure with HTML/JSX
    - style with CSS/Tailwind
    - logic with JS/TS
    - use client only for interactive pieces

If you want, next I can give you a **one-page cheat sheet with tiny examples for HTML, CSS, JS, JSX, and TSX side by side**.

> The subprojects, msync-ui, msync-server, they are using '-' but i think that causes issues somewhere and hence rust automatically uses msync_server as package name. Should i rename the folders to that as well? And why is that done?

Short answer: **no, don’t rename the folders just because Rust uses `_` internally.**

**Why Rust does this**
- Rust package names in `Cargo.toml` can contain `-`, like `msync-server`.
- But Rust **identifiers** cannot contain `-`.
- So when the package/crate is referenced in Rust code, Cargo/rustc convert `-` to `_`.
- That’s why `msync-server` becomes `msync_server`.

Example:
- `Cargo.toml` package name: `msync-server`
- Rust code import: `msync_server`

This is normal and intentional.

**Should folders match?**
- **Standard industry approach:** keep folder names human-readable; they do **not** need to match Rust identifier rules.
- `msync-ui` and `msync-server` are perfectly fine folder names.
- Cargo cares about `Cargo.toml`, not whether the directory uses `-` or `_`.

**Simplest approach**
- Keep:
    - `msync-ui/`
    - `msync-server/`
- Let Rust keep using `msync_server` where code needs an identifier.

**Are you overengineering?**
- Yes, a bit, if you rename folders just to “make everything match”.
- This is solving cosmetic inconsistency, not a real problem.

**Tradeoffs**
- **Keep hyphenated folders**
    - clearer visually
    - common in app/repo names
    - matches JS ecosystem style too
    - normal Rust behavior
- **Rename to underscores**
    - slightly more uniform with Rust code
    - less conventional for web/frontend project folders
    - can make names look worse in URLs/docs/scripts

**Recommendation**
- Keep the folders as `msync-ui` and `msync-server`.
- Accept that Rust code will use `msync_server`.
- Only rename if you hit a **specific real tool problem**, not a theoretical one.

**Rule of thumb**
- filesystem / repo naming: `kebab-case`
- Rust code identifiers: `snake_case`

That split is normal.

If you want, I can next explain the difference between **package name, crate name, binary name, and folder name** in Rust in one compact example.
