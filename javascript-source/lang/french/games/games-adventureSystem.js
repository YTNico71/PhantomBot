/*
 * Copyright (C) 2016-2021 phantombot.github.io/PhantomBot
 *
 * Ce programme est un logiciel libre : vous pouvez le redistribuer et/ou le modifier
 * sous les termes de la licence publique générale GNU telle que publiée par
 * la Free Software Foundation, soit la version 3 de la Licence, soit
 * (à votre choix) toute version ultérieure.
 *
 * Ce programme est distribué dans l'espoir qu'il sera utile,
 * mais SANS AUCUNE GARANTIE ; sans même la garantie implicite de
 * QUALITÉ MARCHANDE ou ADAPTATION À UN USAGE PARTICULIER. Voir le
 * Licence publique générale GNU pour plus de détails.
 *
 * Vous devriez avoir reçu une copie de la licence publique générale GNU
 * avec ce programme. Si ce n'est pas le cas, consultez <http://www.gnu.org/licenses/>.
 */

$.lang.register('adventuresystem.adventure.usage', 'Utilisation : !adventure [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'Vous avez déjà rejoint l\'aventure !');
$.lang.register('adventuresystem.completed', 'L\'aventure est terminée ! Les survivants sont : $1.');
$.lang.register('adventuresystem.completed.no.win', 'L\'aventure est terminée ! Il n\'y a aucun survivant.');
$.lang.register('adventuresystem.completed.win.total', 'L\'aventure s\'est terminée avec $1 survivant(s) et $2 mort(s).');
$.lang.register('adventuresystem.join.bettoohigh', 'Vous ne pouvez pas rejoindre avec $1, le maximum est de $2.');
$.lang.register('adventuresystem.join.bettolow', 'Vous ne pouvez pas rejoindre avec $1, le minimum est de $2.');
$.lang.register('adventuresystem.join.needpoints', 'Vous ne pouvez pas rejoindre avec $1, vous n\'avez que $2.');
$.lang.register('adventuresystem.join.notpossible', 'Vous ne pouvez pas rejoindre maintenant.');
$.lang.register('adventuresystem.join.success', 'Vous avez rejoint l\'aventure avec $1 !');
$.lang.register('adventuresystem.loaded', 'Histoires d\'aventure chargées (trouvé $1).');
$.lang.register('adventuresystem.loaded.prefix', 'Chargé $1 histoires d\'aventures à partir de $2.');
$.lang.register('adventuresystem.payoutwhisper', 'Aventure terminée, 1 $ + 2 $ ont été ajoutés à votre solde.');
$.lang.register('adventuresystem.runstory', 'Commencer l\'aventure "$1" avec $2 joueur(s).');
$.lang.register('adventuresystem.set.success', 'Définir $1 à $2.');
$.lang.register('adventuresystem.set.usage', 'Utilisation : !adventure set [settingname] [value].');
$.lang.register('adventuresystem.start.success', '$1 essaie de réunir une équipe pour une entreprise d\'aventure sérieuse ! Utilisez " !adventure [$2]" pour participer !');
$.lang.register('adventuresystem.tamagotchijoined', '$1 rejoint également l\'aventure.');
$.lang.register('adventuresystem.top5', 'Les 5 meilleurs aventuriers sont : $1.');
$.lang.register('adventuresystem.top5.empty', 'Aucun gagnant d\'aventure n\'a encore été enregistré.');
$.lang.register('adventuresystem.reset', 'L\'aventure s\'est maintenant refroidie ! Utilisez " !adventure [$1]" pour commencer une nouvelle aventure !');

$.lang.register('adventuresystem.stories.default', 'true');

$.lang.register('adventuresystem.stories.1.title', 'Time Heist');
$.lang.register('adventuresystem.stories.1.chapter.1', 'Votre mémoire est vague, sur la table un petit ordinateur portable lit une vidéo : "Je m\'appelle L\'Architecte. La banque de Karabraxos est la plus sécurisée banque dans l\'univers. Vous dévaliserez la banque de Karabraxos !"');
$.lang.register('adventuresystem.stories.1.chapter.2', 'Incapable de laisser son esprit vide, (pris) sent lentement son esprit se vider alors que The Teller se nourrit de ses pensées.');
$.lang.register('adventuresystem.stories.1.chapter.3', 'Nous nous retrouvons dans la pièce où nous avons commencé alors que la conscience (des survivants) s\'estompe lentement à nouveau, pour se réveiller dans nos lits comme si de rien n\'était est arrivé.');

$.lang.register('adventuresystem.stories.2.title', 'Beartraps');
$.lang.register('adventuresystem.stories.2.chapter.1', 'Amis ! J\'ai les coordonnées d\'une réserve secrète de boulons, cachée dans les entrailles de la forêt elfique. Nous devrions nous chausser et donner c\'est parti !');
$.lang.register('adventuresystem.stories.2.chapter.2', 'Attention, pièges à ours ! (attrapé) s\'est fait arnaquer les jambes !');
$.lang.register('adventuresystem.stories.2.chapter.3', 'Dayum, c\'était un appel serré pour perdre une jambe. Mais vous avez mérité cela (survivants) !');

$.lang.register('adventuresystem.stories.3.title', 'Vampires ?!');
$.lang.register('adventuresystem.stories.3.chapter.1', 'Ah, mes chers amis ! J\'ai peut-être trouvé l\'aventure de ma vie. À savoir, la maison du comte Dracula est considérée comme le maître des boulons ! Je \'m pour y aller maintenant !');
$.lang.register('adventuresystem.stories.3.chapter.2', 'C\'est lui ! (attrapé) s\'est fait massacrer violemment !');
$.lang.register('adventuresystem.stories.3.chapter.3', 'C\'était un appel proche, je ne pense pas que j\'ai été mordu. Vous ? Aïe bien, (survivants), ici\' c\'est ta part ! ~Se transforme en chauve-souris et s\'envole ~');

$.lang.register('adventuresystem.stories.4.title', 'Céréales');
$.lang.register('adventuresystem.stories.4.chapter.1', 'Je pense que nous avons une bien plus grande menace entre nos mains que la grotte dans... C\'est mi-homme, mi-ours, mi-cochon... Ne riez pas, JE SUIS SUPER CÉRÉALES !"' );
$.lang.register('adventuresystem.stories.4.chapter.2', '/meles aventuriers se frayent un chemin dans les tunnels, ils entendent un léger bruit derrière eux...');
$.lang.register('adventuresystem.stories.4.chapter.3', 'Attention ! C\'est ManBearPig ! (attrapé) se faire entraîner dans l\'obscurité.');
$.lang.register('adventuresystem.stories.4.chapter.4', '(les survivants) s\'enfuient. Sortons d\'ici les gars ! Nous ne pouvons pas nous en occuper seuls');


/*
 * En utilisant les histoires fournies avec PhantomBot :
 *
 * - Toutes les histoires qui sont regroupées avec le bot se trouvent dans l'espace de noms adventuresystem.stories.*
 * - Si vous ne souhaitez pas utiliser ces histoires, définissez les éléments suivants dans votre fichier de langue personnalisé :
 * $.lang.register('adventuresystem.stories.default', 'false');
 *
 * Règles pour écrire votre propre histoire d'aventure :
 *
 * - Les histoires sont automatiquement chargées à partir du fichier de langue par leur numéro de séquence (adventuresystem.stories.custom.[Ce numéro]).
 * - Il est recommandé d'utiliser un fichier de langue personnalisé pour vos propres histoires.
 * - Conservez le format de votre histoire comme indiqué ci-dessus, en ajoutant la partie ".custom" de l'identifiant.
 * - Il peut y avoir un nombre illimité d'histoires, SI vous conservez leurs sous-numéros 1, 2, 3, 4, 5...
 * - Une histoire doit avoir un titre.
 * - Une histoire peut avoir un nombre illimité de chapitres, SI vous conservez leurs sous-numéros 1, 2, 3, 4, 5...
 * - Les histoires sont choisies au hasard.
 *
 ** Comment faire une histoire spécifique au jeu. Vous devez également vous assurer que vous avez au moins UNE histoire qui ne nécessite pas de jeu spécifique.
 ** Veuillez vous assurer que votre numéro d'histoire suit également. Ce que je veux dire par là, c'est qu'il doit commencer à partir de 1 et monter. Idem pour les chapitres.
 * - Ajouter $.lang.register('adventuresystem.stories.NUMBER.game', 'NOM DU JEU EN MINUSCULES'); en haut du chapitre de l'histoire.

 * Exemple >
 * $.lang.register('adventuresystem.stories.custom.1.game', 'programmation');
 * $.lang.register('adventuresystem.stories.custom.1.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.custom.1.chapter.1', 'histoire aléatoire...');
 *
 * En dessous se trouve un modèle pour votre première histoire personnalisée, supprimez simplement les barres obliques précédentes.
 */

//$.lang.register('adventuresystem.stories.custom.1.title', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.1', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.2', '');
//$.lang.register('adventuresystem.stories.custom.1.chapter.3', '');