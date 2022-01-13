https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickeyi

|Commands|Purpose|
---|---|
|Adding ssh identity into ssh agent|```eval "$(ssh-agent -s)" </br> ssh -vT git@github.com </br> ssh -T GITHUB-USERNAME@github.com </br> ssh-add -l -E sha256 /br> ssh-add ~/.ssh/id_<yourfile>|


