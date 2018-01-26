## ITMD 362, Production Problem 0: Cloning and Committing to a Git Repository

For this production problem, you will fork, clone, and commit and push changes to a
remote GitHub repository. Follow the steps below exactly in order to set up your Production Problems
repository correctly.

1. While logged into your GitHub account in your web browser, point your browser to
   https://github.com/itmd-362-2018/itmd-362-pp and click the Fork button. You will then see
   that you have forked the Production Problems repository from `itmd-362-2018/itmd-362-pp`

2. Once you have forked your own copy of the repository, go to your command line and change to
   whichever directory that you’ve decided you will keep all of your different Git repositories.
   Clone your copy of your computer by clicking the Clone or download button on GitHub, and copying
   either the SSH or HTTPS clone address.

   If you choose SSH (preferable), you must have set up your private/public key pair with GitHub.
   You’ll then be able to clone this way, using your actual GitHub username where this example says
   USERNAME:

    $ git clone git@github.com:USERNAME/itmd-362-pp.git

  If you choose HTTPS, you’ll be able to clone this way, using your actual GitHub username where
  this example says USERNAME:

    $ git clone https://github.com/USERNAME/itmd-362-pp.git

3. You can now change directories into `itmd-362-pp` and then the `pp-00` directory, where you
   should now have this file, `readme.md` on your local computer. Open the file in your editor,
   and write below the URL to your fork of the GitHub repository, and the add and commit:

   My Production Problems repository URL: https://github.com/jpaldana/itmd-362-pp

4. Next, push your commit to GitHub. `git push origin master` from your command line.

5. Next, and most crucially, you need to add the instructor’s repository as a second remote.
   From your command line and within the `itmd-362-pp` directory, run the command:

    $ git remote add instructor https://github.com/itmd-362-2018/itmd-362-pp.git

   Once you have done that, you can run the command `git remote -v` and it should list two remotes,
   one called `origin` and one called `instructor`.

   **To receive the remaining week’s Production Problems, you will change into your `itmd-362-pp`
   directory and run:**

    $ git pull instructor master

6. Finally, email the instructor at karl.stolley@gmail.com with the URL for your copy of the
   Production Problems repository, which should be the same URL that you pasted in on line 30 of
   this file in step 3 above.

   The instructor will then clone your copy of your repository, and update it each week with a
   `git pull`, to review your Production Problems. You do not have to email your work every week.
   Just push to your own copy of the remote.
