[1mdiff --git a/index.pdf b/index.pdf[m
[1mindex c7dc020..662af32 100644[m
Binary files a/index.pdf and b/index.pdf differ
[1mdiff --git a/index.tex b/index.tex[m
[1mindex 8c63caa..2bc351d 100644[m
[1m--- a/index.tex[m
[1m+++ b/index.tex[m
[36m@@ -1,4 +1,5 @@[m
 \documentclass{paper}[m
[32m+[m[32m\usepackage{graphicx}[m
 [m
 \begin{document}[m
 [m
[36m@@ -14,7 +15,7 @@[m [mTrusting Web Media \\[m
 \section{Abstract}[m
 The creation of and spread of false information has led to[m
 a grand public scare, leaving citizens fearful of trusting[m
[31m-reported media.  For example, when polarized claims are made by oppositional[m
[32m+[m[32mreported media \cite{manjoo2016}.  For example, when polarized claims are made by oppositional[m
 sources, there are few objective or subjective tools offered to consumers[m
 on how to reconcile the conflict.  Reconciling truth is essential to[m
 team building and problem solving, which we rely on at the local and national[m
[36m@@ -37,10 +38,14 @@[m [mcommunication.  Because the web is humanity's dominant media communication[m
 mechamism, we believe that a technology trust model is highly relavant[m
 to protect our core values.[m
 [m
[32m+[m[32mAccess to good, clean information should be the default state when consuming web media.  Access to quality information should be just as accessible[m
[32m+[m[32mas clean water. We suggest that the above assertion is a fundamental human right[m
[32m+[m[32min modern society.[m
[32m+[m
 \section{Problem}[m
 [m
 False information is rampant <cite> and creates disagreement among parties who[m
[31m-ultimately seek similar objectives <cite, iirc this-american-life had some good sources here>.[m
[32m+[m[32multimately seek similar objectives <cite, iirc this-american-life had some good sources here> \cite{peoplepress2016}.[m
 \begin{itemize}[m
   \item enumerate multiple false information campaigns and their successes[m
   \item enumerate popular myths that still hold as truths to consumers today[m
[36m@@ -71,6 +76,14 @@[m [mmedia is an ideal candidate.[m
   \item discuss centralized rating systems, independents, and why there will always be reason to cast doubt[m
 \end{itemize}[m
 [m
[32m+[m[32m\begin{figure}[h][m
[32m+[m[32m  \centering[m
[32m+[m[32m  \includegraphics[width=400px]{img/latexworkshop.png}[m
[32m+[m[32m  \caption{Example figure environment}%[m
[32m+[m[32m  \label{figenv}[m
[32m+[m[32m  \end{figure}[m
[32m+[m[32m  See Figure~\ref{figenv}.[m
[32m+[m
 \section{Solution - WebTrust}[m
 [m
 \paragraph{Overview}[m
[36m@@ -81,7 +94,7 @@[m [mmedia is an ideal candidate.[m
   data living on the blockchain.[m
   \item WebTrust uses the decentralized web to uniquely identify individual humans, individual pieces of media[m
   \item Humans tag media as (un)authentic.  These are generally people who witnessed the published media as well.[m
[31m-  \item Media providing humans gain reputation score based on authenticty[m
[32m+[m[32m  \item Media creating humans gain a reputation score based on authenticty[m
 \end{itemize}[m
 [m
 \paragraph{HTML}[m
[36m@@ -98,4 +111,20 @@[m [mmedia is an ideal candidate.[m
 \paragraph{}[m
 \subparagraph{}[m
 [m
[32m+[m[32m\begin{thebibliography}{9}[m
[32m+[m[32m\bibitem{peoplepress2016}[m
[32m+[m[32m  People Press,[m
[32m+[m[32m  "In Presidential Contest, Voters Say ‘Basic Facts,’ Not Just Policies, Are in Dispute",[m
[32m+[m[32m  http://www.people-press.org/2016/10/14/in-presidential-contest-voters-say-basic-facts-not-just-policies-are-in-dispute,[m
[32m+[m[32m  2016.[m
[32m+[m[32m\bibitem{manjoo2016}[m
[32m+[m[32m  Farhad Manjoo,[m
[32m+[m[32m  "How the Internet Is Loosening Our Grip on the Truth",[m
[32m+[m[32m  New York Times,[m
[32m+[m[32m  https://www.nytimes.com/2016/11/03/technology/how-the-internet-is-loosening-our-grip-on-the-truth.html,[m
[32m+[m[32m  2016.[m
[32m+[m
[32m+[m
[32m+[m[32m\end{thebibliography}[m
[32m+[m
 \end{document}[m
