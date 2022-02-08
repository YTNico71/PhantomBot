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

$.lang.register('subscribehandler.auto.sub.mode.interval.set', 'Intervalle de sous-mode automatique défini ! Cela ne fonctionnera que lorsque le flux est en ligne.');
$.lang.register('subscribehandler.auto.submode.timer.404', 'L\'intervalle minimum de sous-mode automatique autorisé est de 30 minutes.');
$.lang.register('subscribehandler.auto.submode.timer.off', 'Mode d\'abonnements automatiques uniquement activé !');
$.lang.register('subscribehandler.auto.submode.timer.usage', 'Utilisation : !autosubmodetimer (intervalle) - définissez l\'intervalle sur 0 pour désactiver.');
$.lang.register('subscribehandler.new.sub.toggle.off', 'Les nouveaux abonnés ne seront plus les bienvenus lors de l\'inscription.');
$.lang.register('subscribehandler.new.sub.toggle.on', 'Les nouveaux abonnés seront désormais les bienvenus lors de l\'inscription.');
$.lang.register('subscribehandler.new.primesub.toggle.off', 'Les nouveaux abonnés Twitch Prime ne seront plus les bienvenus lors de l\'inscription.');
$.lang.register('subscribehandler.new.primesub.toggle.on', 'Les nouveaux abonnés Twitch Prime seront désormais les bienvenus lors de leur abonnement.');
$.lang.register('subscribehandler.resub.msg.set', 'Ensemble de messages de bienvenue pour les réabonnements !');
$.lang.register('subscribehandler.giftsub.msg.set', 'Ensemble de messages de bienvenue pour le cadeau d\'abonné !');
$.lang.register('subscribehandler.giftanonsub.msg.set', 'Ensemble de messages de bienvenue pour les cadeaux d\'abonnés anonymes !');
$.lang.register('subscribehandler.massgiftsub.msg.set', 'Ensemble de messages de bienvenue pour les cadeaux d\'abonnés de masse !');
$.lang.register('subscribehandler.anonmassgiftsub.msg.set', 'Ensemble de messages de bienvenue pour les cadeaux d\'abonnés de masse anonymes !');
$.lang.register('subscribehandler.resub.msg.usage', 'Utilisation : !resubmessage (message) - Balises : (nom), (mois), (récompense) et (plan)');
$.lang.register('subscribehandler.giftsub.msg.usage', 'Utilisation : !giftsubmessage (message) - Balises : (nom), (destinataire), (mois), (récompense) et (plan)');
$.lang.register('subscribehandler.giftanonsub.msg.usage', 'Utilisation : !giftanonsubmessage (message) - Balises : (nom), (destinataire), (mois), (récompense) et (plan)');
$.lang.register('subscribehandler.massgiftsub.msg.usage', 'Utilisation : !massgiftsubmessage (message) - Balises : (nom), (montant), (récompense) et (plan)');
$.lang.register('subscribehandler.anonmassgiftsub.msg.usage', 'Utilisation : !massanongiftsubmessage (message) - Balises : (nom), (montant) et (plan)');
$.lang.register('subscribehandler.resub.msg.noreward.set', 'Message de bienvenue de réabonnement défini pour aucune récompense !');
$.lang.register('subscribehandler.giftsub.msg.noreward.set', 'Message de bienvenue du cadeau d\'abonné défini sans récompense !');
$.lang.register('subscribehandler.resub.msg.noreward.usage', 'Utilisation : !resubmessage (message) - Balises : (nom) (mois)');
$.lang.register('subscribehandler.giftsub.msg.noreward.usage', 'Utilisation : !giftsubmessage (message) - Balises : (nom) (mois)');
$.lang.register('subscribehandler.resub.toggle.off', 'Les réabonnés ne seront plus les bienvenus lors de la réinscription.');
$.lang.register('subscribehandler.giftsub.toggle.off', 'Le cadeau d\'abonné ne sera plus le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.massgiftsub.toggle.off', 'Le cadeau d\'abonné de masse ne sera plus le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.anongiftsub.toggle.off', 'Le cadeau d\'abonné anonyme ne sera plus le bienvenu lors de l\'abonnement..');
$.lang.register('subscribehandler.anonmassgiftsub.toggle.off', 'Le cadeau anonyme d\'abonné de masse ne sera plus le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.resub.toggle.on', 'Les réabonnés seront désormais les bienvenus lors de la réinscription.');
$.lang.register('subscribehandler.giftsub.toggle.on', 'Le cadeau d\'abonné sera désormais le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.massgiftsub.toggle.on', 'Le cadeau d\'abonné de masse sera désormais le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.anongiftsub.toggle.on', 'Le cadeau d\'abonné anonyme sera désormais le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.anonmassgiftsub.toggle.on', 'Le cadeau d\'abonné de masse anonyme sera désormais le bienvenu lors de l\'abonnement.');
$.lang.register('subscribehandler.sub.reward.set', 'Récompense pour l\'abonnement !');
$.lang.register('subscribehandler.sub.reward.usage', 'Utilisation : !subscribereward (montant)');
$.lang.register('subscribehandler.resub.reward.set', 'Récompense pour réabonnement à l\'ensemble !');
$.lang.register('subscribehandler.giftsub.reward.set', 'Récompense fou réabonner l\'ensemble !');
$.lang.register('subscribehandler.resub.reward.usage', 'Utilisation : !resubscribereward (montant)');
$.lang.register('subscribehandler.giftsub.reward.usage', 'Utilisation : !giftsubreward (montant)');
$.lang.register('subscribehandler.sub.count', 'Il y a actuellement $1 abonnés !');
$.lang.register('subscribehandler.sub.msg.set', 'Ensemble de messages de bienvenue pour les nouveaux abonnés !');
$.lang.register('subscribehandler.primesub.msg.set', 'Ensemble de messages de bienvenue pour les nouveaux abonnés Twitch Prime !');
$.lang.register('subscribehandler.sub.msg.usage', 'Utilisation : !submessage (message) - Balises : (nom) et (récompense)');
$.lang.register('subscribehandler.primesub.msg.usage', 'Utilisation : !primesubmessage (message) - Balises : (nom) et (récompense)');
$.lang.register('subscribehandler.sub.msg.noreward.set', 'Message de bienvenue pour nouvel abonné sans récompense !');
$.lang.register('subscribehandler.sub.msg.noreward.usage', 'Utilisation : !submessage (message) - Balise : (nom)');
$.lang.register('subscribehandler.resubemote.set', 'Nouvel ensemble d\'emotes de réabonnement !');
$.lang.register('subscribehandler.resubemote.usage', 'Utilisation : !resubemote (nom de l\'emote)');