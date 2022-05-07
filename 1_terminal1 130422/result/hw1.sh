#!C:\"QA programm"\Git\git-bash.exe
mkdir -p /d/qa_less/hw_terminal_1/qa1/script
cd /d/qa_less/hw_terminal_1/qa1/script
mkdir -p qaa4/{qaa4_1,qaa4_2}
cd qaa4
touch qaa4_1/{1.txt,2.txt,3.txt}; touch qaa4_2/{1.json,2.json}
mkdir -p {/d/qa_less/hw_terminal_1/qa1/script/sc1/,/d/qa_less/hw_terminal_1/qa1/script/sc2/,/d/qa_less/hw_terminal_1/qa1/script/sc3/}
cd /d/qa_less/hw_terminal_1/qa1/script | ls -la
cp /d/qa_less/hw_terminal_1/qa1/script/qaa4/qaa4_1/{1.txt,2.txt} /d/qa_less/hw_terminal_1/qa1/script/sc1/