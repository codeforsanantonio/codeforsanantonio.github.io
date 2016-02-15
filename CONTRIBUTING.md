# Contributing

Working on projects for Code For San Antonio is a collaborative effort. In an attempt to make this process as simple as possible for everyone, we have set some guidelines for contributing to projects. First and foremost, you must understand our [license] and our code of conduct.

[license]: https://github.com/codeforsanantonio/codeforsanantonio.github.io/blob/master/LICENSE

We will use the [Code For San Antonio] repository as an example, but these same steps apply to any project of ours that you wish to contribute to!

[Code For San Antonio]: https://github.com/codeforsanantonio/codeforsanantonio.github.io

First, navigate to the repository on github and **fork** the repository.
Then, clone the repository into a directory on your machine.
```
git clone git@github.com:your_username/codeforsanantonio.github.io.git
```

Next, you will want to create a **branch** so that it is easier to organize your contributions. Let's use our first name for the branch name.
```
git checkout -b your_first_name
```

You are now ready to make your contributions! When you have finished and are ready to commit them, you will simply do...
```
git add -a
```
This will add every file that you have changed, or added, that is different from the master branch.

<br>

###**Contribute in the style of the project to the best of your abilities.** *This may mean using indents, semi colons or comments differently than you would in your own repository, but makes it easier for the maintainer to merge and for others to understand and maintain in the future.*

<br>

Next, you will do a commit.
```
git commit -m "Your Commit Message Here..."
```
Make sure that your commit message is clear, concise and in the present tense (Ex. "Add new about page" instead of "Added new about page")

Once your commit message has been set, you will then execute
```
git push origin your_branch_name
```
This will push your changes up to your **forked** repository. From here, the final step to contribution is to create a **pull** request.

To do this, click on the green *New pull request* button on **your** forked repository page! On the next page, you will make sure that the **base fork** and **base** dropdowns both show the *master* branch and that **head fork** and **compare** both show your forked repository and branch, respectively.
Once that is done, you wait until the project manager reviews your request and decided whether or not to merge your changes.

It is probably a good idea to delete your fork and locally cloned repository once your changes have been merged. This is because your local repository will not auto update with changes from the master. The next time you wish to make a contribution, simply repeat the above steps! This ensures that you are always working with the most updated version of the master repository.
