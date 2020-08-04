# Movies search

App that allows users to search for movies. I've used Material UI, mostly due to the fact of limited
time, that I wanted to spend on development. Folder structure is feature based. I thought about going
with generic folder structure for such small app (/components, /containers, ...), but because of my experience
I decided on features (of course there are pros and cons of each approach).

## Things to improve

### In the codebase

- Setup stylelint.
- Automatic import sorting, using eslint plugin (eslint-plugin-simple-import-sort preferably).
- Install Storybook with appropriate addons and use it during development.
- Add more tests, using react-testing-library (testing from user's perspective).
- Install Cypress and write E2E tests.
- Write down code style guide with a list of conventions to follow.
- Use OWASP Application Security Verification Standard.
- CI, using for example CircleCI, with a list of predefined tasks that
  need to succeed, before a new version of the app is deployed.
- Focus more on semantics (based on audits).
- More specific application title.
- Change app icon.
- Add types and handle more specific error messages that come from the API.
- Internalization (i18n).
- Static code analysis (using Codeclimate preferably).
- Remove data-testid during build.
- Add husky and selected npm scripts.
- Backend entities could be typed on frontend, but it was a hard task, due to the fact that
  I couldn't find such information in the documentation.
- CRA (create-react-app) in my case is quite limiting. What I could do, given more time:
  - Eject (but it has some cons)
  - Next.js
  - react-app-rewired, or some other similar solution (some cons as well)
  - Custom solution
- Deserialize API's data a little earlier (in /api) and create a folder with entities, but
  I wanted to avoid hasty abstractions (AHA).
- Movies could be kept as an object, for example

```javascript
{
  star: { // title that was searched
    5: [{...}, {...}, ...] // page number
  }
}
```

This way it's possible to cache some requests.

- Most popular movies shouldn't be hardcoded. It would be cool to add a backend server.
- While developing it I didn't try to write "good commits". While working on serious project I would
  choose between Git Flow, Trunk based development or some custom solution.
- I could have created more presentational components.
- Styled-components could have been extracted to separate files.

### Application features

- A cool feature would be to create AI (in future, maybe not as MVP, but it depends) planner. Let me explain:
  - It would a way to get reminders about movie/ TV series that a user would like to watch.
  - Depending on previously set reminders, history in the app, interests (favourite actor, movie genre) it would be possible to suggests movie titles, tv shows
    for a user to add to a plan.
  - For a given hour there can be many titles that can fit into user's profile.
  - AI would be able to make better predictions with time.
  - User could get notification on their mobile phones, email, ...
- "Quick search" results could be shown in a form of a list that would be displayed under text field
  (so instead of text field I would display a dropdown). Search list could be prepared based on user's profile
  and users' preferences. For example if users type "Harry", they are probably looking for "Harry Potter".
- Movies list could be sorted by users' preferences (example I've used before).
- Add "recently viewed" section.
- More advanced breadcrumbs, instead of a "Back to homepage" button that is displayed
  on every page. except of a root.
- Run automatic audits, using Lighthouse and make necessary improvements.
- More a11y focus (to meet WCAG desired conformance level).
- Perform usability tests with users, and experts (cognitive walkthrough, control lists).
- Add "Home page" icon in navigation bar.
- More specific error pages with clear communicates for users, that explain what have happened, and what
  they have to do (I've added generic "Something went wrong" error).
- Display posters for "Most popular", "Movies list"
- Disabled "Search" button can be confusing for user. They can ask themselves - "Why I can't click this button". It was
  quite handy solution, having in mind that I had limited time. It would be better to allow users to click this button
  and display some kind of message "Please specify title of a movie you are looking for".
- Add "year" filter. It can be achieved adding a new button to dashboard with the label of "Filters", that will open up the new, previously hidden,
  section, that enables to add more filters.
- Add sorting functionality to the list of movies (it's not possible using this API).
- Add "highest rated" section.
- Make it a PWA.
- Add a way to choose where a specific movie can be watched using subscription based services,
  or in TV.
- Pagination on mobile should be displayed differently
- Add a way to leave reviews and share it with others.
- Implement a forum / comments section, but there had to be some way to make sure it won't get messy.
- Ranking based on responses from users of this portal.
- "New releases" section.
- Add much more information on details page. Right now just poster and full plot are displayed.
- Pagination is not user-friendly. Let's say there are 224 pages for a title "Start", but user want to go to the page 113.
  It will be really hard.
- Add a way to specify movies per page (not possible currently) and display information to user like "You are seeing 10 results from 2340".
- Display more information about movies on movies list.
