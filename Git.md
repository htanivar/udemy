https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickeyi
eval "$(ssh-agent -s)"
ssh -vT git@github.com
ssh -T GITHUB-USERNAME@github.com
ssh-add -l -E sha256
ssh-add ~/.ssh/id_<yourfile>_
