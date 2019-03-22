# Plan

In this document here are some of the problem, plan for the current repo is listed out

## Current Issue

1. There is no environment for the testing,development and production
1. In the frontend (create-react-app) is used which does not support the SSR
1. There is no Testing for the components in the frontend and testing of the api in the backend.

## Plan To resolve the above issue

1. Provide a separate environment for frontend and backend via container technology like docker where each of the frontend and backend will be under the container within a same network which can resolve the environment issue with the same code base

1. For the seo of the app and to have better optimization of the build with better code splitting,better opmitimzation (dynamically generate CSS classes and dyanamically generated javascript)

1. We can resolve by using the Jest.js which give the power to test both frontend and backend by this we can have test driven development

1. with the container and testing setup we can have ci-cd setup which can automatically test and deploy our changes of the app
