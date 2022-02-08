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

$.lang.register('followhandler.check.follows', '$1 suit le canal.');
$.lang.register('followhandler.check.notfollows', '$1 ne suit pas le canal.');
$.lang.register('followhandler.check.usage', 'Utilisation : !checkfollow [nom d`\'utilisateur]');
$.lang.register('followhandler.follow.message', '(nom) vient de suivre le canal ! Voici +(récompense) !');
$.lang.register('followhandler.followers', '$1 utilisateurs suivent ce canal !');
$.lang.register('followhandler.followtrain.mega', 'Mega follow train!! ($1)');
$.lang.register('followhandler.followtrain.penta', 'Penta follow!!');
$.lang.register('followhandler.followtrain.quad', 'Quadra follow!!');
$.lang.register('followhandler.followtrain.triple', 'Triple follow!!');
$.lang.register('followhandler.followtrain.ultra', 'Ultra follow train!! ($1)');
$.lang.register('followhandler.followtrain.unbelievable', 'Incroyable suivre le train !! ($1)');
$.lang.register('followhandler.set.followmessage.success', 'Suivre le message défini sur "$1".');
$.lang.register('followhandler.set.followmessage.usage', 'Utilisation : !followmessage [message] - Balises : (récompense) (nom)');
$.lang.register('followhandler.set.followreward.success', 'Suivre la récompense fixée à $1.');
$.lang.register('followhandler.set.followreward.usage', 'Utilisation : !followreward [$1]. (Actuellement $2)');
$.lang.register('followhandler.followtoggle.on', 'Les annonces sont activées pour les nouveaux abonnés.');
$.lang.register('followhandler.followtoggle.off', 'Les annonces sont désactivées pour les nouveaux abonnés.');
$.lang.register('followhandler.followtraintoggle.on', 'Le suivi des annonces de trains est maintenant activé.');
$.lang.register('followhandler.followtraintoggle.off', 'Le suivi des annonces de train est maintenant désactivé.');
$.lang.register('followhandler.fixfollow.usage', 'Utilisation : !fixfollow (nom d\'utilisateur)');
$.lang.register('followhandler.fixfollow.error', '$1 est déjà dans la liste suivie.');
$.lang.register('followhandler.fixfollow.error.404', '$1 ne suit pas votre chaîne.');
$.lang.register('followhandler.fixfollow.added', 'A ajouté $1 à la liste suivie !');
$.lang.register('followhandler.set.followdelay.usage', 'Utilisation : !followdelay [quantité en secondes] - Le minimum est de 5 secondes.');
$.lang.register('followhandler.set.followdelay.success', 'Délai de suivi fixé à $1 secondes.');
$.lang.register('followhandler.follow.age.err.404', '$1 $2 ne suit pas le canal $3');
$.lang.register('followhandler.follow.age.time.days', '$1 $2 suit le canal $3 depuis $4 (il y a 5 jours).');
$.lang.register('followhandler.follow.age.time', '$1 $2 suit le canal $3 depuis $4.');
$.lang.register('followhandler.follow.age.datefmt', 'MM-jj-aaaa');
$.lang.register('followhandler.follow.age.datefmt.404', 'Non suivi');