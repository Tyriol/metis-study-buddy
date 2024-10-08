# The plan for the METIS Study App

## Product Ideation

[Link to disney ideation miro](https://miro.com/app/board/uXjVLbnZvJU=/?moveToWidget=3458764600826980667&cot=14)

## Research

- Tech stack
- npm packages
- compare to similar apps
- Define MVP and the subsequent versions
- Research what sort of Code of Conduct/T's and C's we should have
- User Research
  - Would anyone find the app useful
  - What would they use it for
  - What features would you need

## Build boilerplate app

- Create base app depending on tech stack chosen
  - Idea of component tree
  - stretch:goals, simple components created
- Add in guardrails eg husky, linting, testing, security
- Deploy base app using something like supabase/vercel

## MVP v.0

- A User Account:
  - Name
  - A form that takes:
    - your desired learning subjects
    - languages you want to improve in
- ability to match on subjects
- own profiles created for demo
- self organised connections

## VP v.1

- ability to add times available for studying
- Time availbility matching

## VP v.2

- Ability to connect via the app

## VP v.3

...

## Authentication and user data creation

- sign up via supabase
  - entry in auth.users
  - trigger row addition in profiles table
- User profile creation page
  - add name to profile table
  - add about me profile table
  - subjects to subjects table

// hide signout on signin page
// user profile if signed in
// user details form if signing up
// add name, about, subjects
// update user record
// creates an entry in subjects
// user profile
// click to see matches
// takes you to list of matches

// populate subjects from db
// make it look better? Checkboxes maybe?
