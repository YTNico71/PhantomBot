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

$.lang.register('donationhandler.donation.new', 'Merci beaucoup (nom) pour le pourboire de $(montant) (devise) !');
$.lang.register('donationhandler.donation.newreward', 'Merci beaucoup (nom) pour le pourboire de $(montant) (devise) ! Voici (points) (pointname) !');
$.lang.register('donationhandler.lastdonation.no-donations', 'Il n\'y a actuellement aucun conseil.');
$.lang.register('donationhandler.lastdonation.404', 'Impossible de trouver le dernier conseil !');
$.lang.register('donationhandler.lastdonation.success', 'Le dernier pourboire provenait de (nom) pour un montant de $(montant) (devise).');
$.lang.register('donationhandler.donations.usage', 'Utilisation : !streamlabs (announce | rewardmultiplier n.n | message | lastmessage | currencycode)');
$.lang.register('donationhandler.donations.announce.disable', 'Les pourboires ne seront plus annoncés.');
$.lang.register('donationhandler.donations.announce.enable', 'Les astuces vont maintenant être annoncées.');
$.lang.register('donationhandler.donations.reward.usage', 'Usage: !streamlabs rewardmultiplier [n.n] Mettre à 0 pour désactiver');
$.lang.register('donationhandler.donations.reward.success', 'La récompense pour les pourboires a été fixée à 1 $ 2 $ par montant total de devise donnée.');
$.lang.register('donationhandler.donations.message.usage', 'Utilisation : !streamlabs message [message] Balises : (nom) (montant) (devise) (message)');
$.lang.register('donationhandler.donations.rewardmessage.usage', 'Utilisation : !streamlabs rewardmessage [message] Balises : (nom) (montant) (devise) (points) (nom du point) (message)');
$.lang.register('donationhandler.donations.message.no-name', 'Une balise (nom) n\'a pas été fournie, fournissez au moins la balise (nom). Balises : (nom) (montant) (devise) ( message)');
$.lang.register('donationhandler.donations.rewardmessage.no-name', 'Une balise (nom) n\'a pas été fournie, fournissez au moins la balise (nom). Balises : (nom) (montant) (devise) ( points) (nom du point) (message)');
$.lang.register('donationhandler.donations.message.success', 'Mise à jour du message pour les conseils lorsque les récompenses sont désactivées.');
$.lang.register('donationhandler.donations.rewardmessage.success', 'Mise à jour du message pour les conseils avec les récompenses activées.');
$.lang.register('donationhandler.enabled.donators', 'Le groupe de donateurs a été activé.');
$.lang.register('donationhandler.disabled.donators', 'Le groupe de donateurs a été désactivé.');
$.lang.register('donationhandler.donators.min', 'Le minimum avant d\'être promu Donateur a été fixé à $1');
$.lang.register('donationhandler.donators.min.usage', 'Utilisation : !streamlabs minmumbeforepromotion [montant]');
$.lang.register('donationhandler.streamlabs.currencycode.usage', 'Usage: !streamlabs currencycode [code] - Vous pouvez trouver une liste valide ici : https://twitchalerts.readme.io/v1.0/docs/ devises-codes');
$.lang.register('donationhandler.streamlabs.currencycode.success', 'Le code de devise pour les dons Streamlabs est désormais défini sur : $1');
$.lang.register('donationhandler.streamlabs.currencycode.success-erase', 'Le code de devise pour les dons Streamlabs a été supprimé, tous les dons apparaîtront désormais dans leur devise d\'origine');