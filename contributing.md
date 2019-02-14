# Contributions rules

## Branching/git workflow:

LEGENDS:
Production branch : master
Staging branch : staging


A central branch will be there for staging and the main master branch is there for productions.

→ The master branch is used only when the production is reviewed and allowed via a mutual agreement.
→ The master branch will be deployed deployed on
 https://github.com/WrippleFoss/mentorFix/
Which will be under Admin’s control. Only they can approve the changes once they are done and tested into the production(master) branch
→ A branch named “development” will be used for having a central staging branch which will be deployed on {Enter staging URL of heroku or any other platform}.
Pull and merge to.
→ Process of working on an issue:
	→ “Issue01” needs to be worked on.
	→ Fork the repo.
	→ checkout a branch from “staging”, name it {user}/{feature}
		Eg. abhishek71994/Issue01
	→ Once the work starts Inform in the discord server/slack channel to the team-mates,also update asana.
	→ Once the work is done, commit(Follow Commit Styles below) and pull any new changes from the “staging” branch and resolve any conflicts.
	→ Once that is done, push the changes in your feature branch, Create a PR for the “Staging” branch(Follow the PR style given) and Inform team-mate(in the public channel) in discord/slack channel. Once that is done, it will be reviewed and pushed to staging, where it can be tested and later pushed to the production branch.
