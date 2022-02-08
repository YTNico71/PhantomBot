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

$.lang.register('streamelements.donation.new', 'Merci beaucoup (nom) pour le pourboire de $(montant) !');
$.lang.register('streamelements.donation.newreward', 'Merci beaucoup (nom) pour le pourboire de $(montant) (devise) ! Voici (points) (pointname) !');
$.lang.register('streamelements.donations.usage', 'Utilisation : !streamelements (announce | rewardmultiplier n.n | message | lastmessage)');
$.lang.register('streamelements.donations.announce.disable', 'Les astuces ne seront plus annoncées.');
$.lang.register('streamelements.donations.announce.enable', 'Les astuces vont maintenant être annoncées.');
$.lang.register('streamelements.donations.reward.usage', 'Usage: !streamelements rewardmultiplier n.n Mettre à 0 pour désactiver');
$.lang.register('streamelements.donations.reward.success', 'La récompense pour les pourboires a été fixée à 1 $ 2 $ par montant total de devise donnée.');
$.lang.register('streamelements.donations.message.usage', 'Utilisation : !streamelements message [message...] Balises : (nom) (montant) (devise) (currencysymbol) (message) (formattedamount)') ;
$.lang.register('streamelements.donations.rewardmessage.usage', 'Utilisation : !streamelements rewardmessage [message...] Balises : (nom) (montant) (devise) (récompense) (message)');
$.lang.register('streamelements.donations.message.no-name', 'Une balise (nom) n\'a pas été fournie, fournissez au minimum la balise (nom). Balises : (nom) (montant) (devise) ( message)');
$.lang.register('streamelements.donations.rewardmessage.no-name', 'Une balise (nom) n\'a pas été fournie, fournissez au moins la balise (nom). Balises : (nom) (montant) (devise) ( récompense) (message)');
$.lang.register('streamelements.donations.message.success', 'Mise à jour du message pour les conseils lorsque les récompenses sont désactivées.');
$.lang.register('streamelements.donations.rewardmessage.success', 'Mise à jour du message pour les conseils avec les récompenses activées.');
$.lang.register('streamelements.donations.lastmessage.success', 'Met à jour le message pour la commande !lasttip.');
$.lang.register('streamelements.enabled.donators', 'Le groupe de donateurs a été activé.');
$.lang.register('streamelements.disabled.donators', 'Le groupe de donateurs a été désactivé.');
$.lang.register('streamelements.donators.min', 'Le minimum avant d\'être promu Donateur a été fixé à $1');
$.lang.register('streamelements.donators.min.usage', 'Utilisation : !streamelements minmumbeforepromotion (montant)');