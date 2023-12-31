/*
ESTADOS DO GIT/VERSIONAMENTO

                Untracked       unmodified      Modified        Staged
add the file        =>              =>             =>

              edit the file         =>
                              stage the file       =>
remove the file    <==
                                    <==            <==         <==         commit
                                        
salvando modificacoes no git

COMANDOS GIT:

git add .\{nome do  arquivo} (adiciona o arquivo para a area de staged)
git diff (ver as alteracoes que foram feitas o antes e o depois)
git commit -m "nome da alteracao" (commita manda para o diretorio)
git push origin master (manda para o diretorio remoto github)
git log (ver o historico)
git restore (restaura o estado anterior)
git restore --staged {nome do arquivo} (tira da area de staged e volta para a area de modified)
git remote (ver qual repositorio remoto esta conectado com o repositorio local)
git diff origin/master (olha oque voce esta trazendo do diretorio remoto.)
git branch {nome da branch} (cria uma nova branch)
git log --oneline --decorate (visualiza para onde o head esta apontado)
git checkout {nome da branch} (aponta o head para outra branch)
git branch (lista todas as branchs)
git merge {nome do arquivo} (uni duas ramificacoes em uma só)
*/