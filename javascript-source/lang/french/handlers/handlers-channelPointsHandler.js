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

$.lang.register('channelpointshandler.notenabled', 'aucune fonction de point de canal n\'est actuellement activée. Veuillez utiliser "!channelpoints info" pour plus d\'informations sur ce que PhantomBot peut faire avec les points de canal ou "!channelpoints usage" pour l\'utilisation');
$.lang.register('channelpointshandler.info', 'PhantomBot peut être configuré pour automatiser l\'échange de points de canal pour plusieurs fonctions. Transfert : l\'utilisateur recevra la devise du bot. Giveall : tout le monde dans le chat recevra la devise du bot. Emoteonly : placez le chat dans l\'emote mode uniquement pendant un certain temps. Timeout : expire un utilisateur spécifié pendant un certain temps.');
$.lang.register('channelpointshandler.usage', 'usage: !channelpoints [info / usage / transfer / giveall / emoteonly / timeout]');
$.lang.register('channelpointshandler.current', 'l\'automatisation des points de canal est actuellement activée pour $1. Utilisez "!channelpoints useage" pour l\'utilisation de la commande ou "!channelpoints info" pour plus d\'informations sur ce que PhantomBot peut faire avec les points de canal');
$.lang.register('channelpointshandler.nan', 'l\'entrée doit être un nombre, veuillez réessayer.');
$.lang.register('channelpointshandler.config.failed', 'aucun échange de points de canal n\'a été détecté. Veuillez réessayer. Si vous rencontrez des problèmes, veuillez visiter le PhantomBot Discord discord.com/invite/YKvMd78');

$.lang.register('channelpointshandler.transfer.info', 'le transfert n\'est pas activé. Lorsqu\'un échange de transfert est réclamé, l\'utilisateur recevra un nombre défini de points. Pour configurer, veuillez utiliser "!channelpoints transfer config" ou pour plus info s\'il vous plaît utiliser "! utilisation du transfert channelpoints."');
$.lang.register('channelpointshandler.transfer.current', 'les rachats de transfert sont enregistrés à $1 et l\'utilisateur recevra 2$ points pour chaque rachat. Pour changer, veuillez utiliser "!channelpoints transfer [config / amount]"');
$.lang.register('channelpointshandler.transfer.usage', 'usage: !channelpoints transfer [usage/config/mount/toggle]');
$.lang.register('channelpointshandler.transfer.config.start', 'Configuration de transfert de points de canal active. Veuillez utiliser la récompense souhaitée.');
$.lang.register('channelpointshandler.transfer.config.complete', 'Configuration du transfert des points de canal terminée. Le transfert est maintenant enregistré pour récompenser $1.');
$.lang.register('channelpointshandler.transfer.amount.notset', 'la récompense en points canal, le montant du transfert n\'a pas été défini. Utilisez "!channelpoints transfer amount [nombre de points que le bot attribuera]" pour définir.');
$.lang.register('channelpointshandler.transfer.amount.usage', 'récompense en points canal, montant du transfert fixé à 1 $. Utilisez "!montant du transfert channelpoints [nombre de points que le bot attribuera]" pour changer.');
$.lang.register('channelpointshandler.transfer.amount.message', 'le transfert d\'échange de points de chaîne ajoutera 1 $ de points à l\'utilisateur qui a échangé la récompense.');
$.lang.register('channelpointshandler.transfer.toggle.id', 'impossible d\'activer le transfert car aucun ID de récompense valide n\'a été trouvé. Veuillez utiliser "!channelpoints transfer config" pour définir la récompense.');
$.lang.register('channelpointshandler.transfer.toggle.amount', 'impossible \'activer le transfert car aucun montant n\'a été défini. Veuillez utiliser "!channelpoints transfer [nombre de points que le bot attribuera]" pour définir.');
$.lang.register('channelpointshandler.transfer.enabled', 'transfert d\'échange de points de canal activé pour la récompense $1.');
$.lang.register('channelpointshandler.transfer.disabled', 'transfert d\'échange de points de canal désactivé.');

$.lang.register('channelpointshandler.giveall.info', 'giveall n\'est pas activé. Lorsqu\'un rachat de giveall est réclamé, tous les utilisateurs du chat recevront un nombre défini de points. Pour configurer, veuillez utiliser "!channelpoints giveall config" ou pour plus d\'informations, veuillez utiliser "!channelpoints giveall use."');
$.lang.register('channelpointshandler.giveall.current', 'les rachats giveall sont enregistrés à 1$ et l\'utilisateur recevra 2$ points pour chaque rachat. Pour changer, veuillez utiliser "!channelpoints giveall [config / amount]"');
$.lang.register('channelpointshandler.giveall.usage', 'usage: !channelpoints giveall [usage/config/mount/toggle]');
$.lang.register('channelpointshandler.giveall.config.start', 'Channel points giveall config active. Veuillez utiliser la récompense souhaitée.');
$.lang.register('channelpointshandler.giveall.config.complete', 'Channel points giveall config complete. Giveall est maintenant enregistré pour récompenser $1.');
$.lang.register('point de canaltshandler.giveall.amount.notset', 'canal points de récompense, le montant de giveall n\'a pas été défini. Utilisez "!channelpoints giveall montant [nombre de points que le bot attribuera]" pour définir.');
$.lang.register('channelpointshandler.giveall.amount.usage', 'channel points reward, giveall montant défini sur 1 $. Utilisez "!channelpoints giveall montant [nombre de points que le bot attribuera]" pour changer.');
$.lang.register('channelpointshandler.giveall.amount.message', 'l\'échange de points channel giveall ajoutera 1$ points à tous les utilisateurs dans le chat.');
$.lang.register('channelpointshandler.giveall.toggle.id', 'impossible d\'activer giveall car aucun ID de récompense valide n\'a été trouvé. Veuillez utiliser "!channelpoints giveall config" pour définir la récompense.');
$.lang.register('channelpointshandler.giveall.toggle.amount', 'impossible d\'activer giveall car aucun montant n\'a été défini. Veuillez utiliser "!channelpoints giveall montant [nombre de points que le bot attribuera]" pour définir.');
$.lang.register('channelpointshandler.giveall.enabled', 'Giveall d\'échange de points de canal activé pour la récompense $1.');
$.lang.register('channelpointshandler.giveall.disabled', 'échange de points channel giveall désactivé.');

$.lang.register('channelpointshandler.emoteonly.info', 'emoteonly n\'est pas activé. Lorsqu\'un échange emoteonly est réclamé, le chat sera placé en mode emote uniquement pour une durée définie. Pour configurer, veuillez utiliser "!channelpoints emoteonly config" ou pour plus d\'informations, veuillez utiliser "!channelpoints emoteonly use."');
$.lang.register('channelpointshandler.emoteonly.current', 'les échanges emoteonly sont enregistrés sur $1 et le chat sera placé en mode emote uniquement pendant $2 secondes. Pour changer, veuillez utiliser "!channelpoints emoteonly [config / duration]"') ;
$.lang.register('channelpointshandler.emoteonly.usage', 'usage: !channelpoints emoteonly [usage/config/duration/toggle]');
$.lang.register('channelpointshandler.emoteonly.config.start', 'Channel points emoteonly config active. Veuillez utiliser la récompense souhaitée.');
$.lang.register('channelpointshandler.emoteonly.config.complete', 'Configuration emoteonly des points de canal terminée. Emoteonly est maintenant enregistré pour récompenser $1.');
$.lang.register('channelpointshandler.emoteonly.duration.notset', 'la récompense des points de canal, la durée emoteonly n\'a pas été définie. Utilisez "!channelpoints emoteonly durée [durée en secondes]" pour définir.');
$.lang.register('channelpointshandler.emoteonly.duration.usage', 'récompense en points de canal, durée emoteonly définie sur 1 $. Utilisez "!channelpoints emoteonly durée [durée en secondes]" pour changer.');
$.lang.register('channelpointshandler.emoteonly.duration.message', 'l\'échange de points de canal emoteonly placera le chat en mode emote uniquement pendant $1 secondes.');
$.lang.register('channelpointshandler.emoteonly.toggle.id', 'impossible d\'activer emoteonly car aucun ID de récompense valide n\'a été trouvé. Veuillez utiliser "!channelpoints emoteonly config" pour définir la récompense.');
$.lang.register('channelpointshandler.emoteonly.toggle.duration', 'impossible d\'activer emoteonly car aucune durée n\'a été définie. Veuillez utiliser "!channelpoints emoteonly durée [durée en secondes]" pour définir.');
$.lang.register('channelpointshandler.emoteonly.enabled', 'échange de points de canal emoteonly activé pour la récompense $1.');
$.lang.register('channelpointshandler.emoteonly.disabled', 'échange de points de canal emoteonly désactivé.');

$.lang.register('channelpointshandler.timeout.info', 'le délai d\'attente n\'est pas activé. Lorsqu\'un échange de délai d\'expiration est réclamé, l\'utilisateur indiqué sera expiré pendant une durée définie. Pour configurer, veuillez utiliser "!channelpoints timeout config" ou pour plus d\'informations s\'il vous plaît utiliser "! utilisation du délai d\'attente channelpoints."');
$.lang.register('channelpointshandler.timeout.current', 'les rachats de timeout sont enregistrés sur $1 et l\'utilisateur spécifié sera expiré pendant $2 secondes. Pour changer, veuillez utiliser "!channelpoints timeout [config / duration]"');
$.lang.register('channelpointshandler.timeout.usage', 'usage: !channelpoints timeout [usage/config/duration/toggle]');
$.lang.register('channelpointshandler.timeout.config.start', 'Configuration du délai d\'expiration des points de canal active. Veuillez utiliser la récompense souhaitée.');
$.lang.register('channelpointshandler.timeout.config.complete', 'Configuration du délai d\'expiration des points de canal terminée. Le délai d\'expiration est maintenant enregistré pour récompenser $1.');
$.lang.register('channelpointshandler.timeout.duration.notset', 'la récompense des points de canal, la durée du délai d\'attente n\'a pas été définie. Utilisez "!channelpoints timeout duration [durée en secondes]" pour définir.');
$.lang.register('channelpointshandler.timeout.duration.usage', 'récompense en points de canal, durée de temporisation fixée à $1. Utilisez "!channelpoints timeout duration [durée en secondes]" pour changer.');
$.lang.register('channelpointshandler.timeout.duration.message', 'le délai d\'expiration des points de canal mettra l\'utilisateur spécifié hors service pendant $1 secondes.');
$.lang.register('channelpointshandler.timeout.toggle.id', 'impossible d\'activer le délai car aucun ID de récompense valide n\'a été trouvé. Veuillez utiliser "!channelpoints timeout config" pour définir la récompense.');
$.lang.register('channelpointshandler.timeout.toggle.duration', 'impossible d\'activer le délai car aucune durée n\'a été définie. Veuillez utiliser "!channelpoints timeout duration [durée en secondes]" à définir.');
$.lang.register('channelpointshandler.timeout.enabled', 'Délai d\'échange des points de canal activé pour la récompense $1.');
$.lang.register('channelpointshandler.timeout.disabled', 'délai d\'échange de points de canal désactivé.');
$.lang.register('channelpointshandler.timeout.nouserinput', 'La récompense en points de chaîne utilisée n\'a pas été saisie par l\'utilisateur et ne peut donc pas être utilisée pour le délai d\'expiration. Veuillez configurer une récompense avec la saisie de l\'utilisateur et réessayer.');