$.lang.register('discord.promotesystem.cmd.promote.usage', '!promote add [short bio] | delete - Ajoutez ou supprimez-vous d\'être promu.');
$.lang.register('discord.promotesystem.cmd.promote.noselfmanage', 'Personne n\'est autorisé à se gérer, veuillez parler à un modérateur pour être ajouté ou supprimé.');
$.lang.register('discord.promotesystem.cmd.promote.nochannels', 'Demander à un administrateur de définir un canal de promotion avec !promote channel et/ou !promote streamchannel');
$.lang.register('discord.promotesystem.cmd.promote.revoked', 'Vous n\'êtes plus autorisé à vous ajouter.');

$.lang.register('discord.promotesystem.cmd.promote.add.nobio', 'Vous devez fournir une courte biographie ou utiliser le mot clé \'none\' (!promote add none).');
$.lang.register('discord.promotesystem.cmd.promote.add.success', 'Vous ($1) allez maintenant être promu');
$.lang.register('discord.promotesystem.cmd.promote.del.success', 'Vous ($1) ne serez plus promu');

$.lang.register('discord.promotesystem.cmd.promoteadm.usage', '!promoteadm add | delete | so | channel | streamchannel | revoke | allow | toggleselfmanage | togglestats | togglebanner | list | setinterval');
$.lang.register('discord.promotesystem.cmd.promoteadm.nochannels', 'Définir les canaux avec !promoteadm channel et/ou !promoteadm streamchannel');
$.lang.register('discord.promotesystem.cmd.promoteadm.noacct', 'Ce compte ne semble pas exister sur Twitch : $1');

$.lang.register('discord.promotesystem.cmd.promoteadm.add.nouser', 'Qui souhaitez-vous promouvoir ?');
$.lang.register('discord.promotesystem.cmd.promoteadm.add.nobio', 'Vous devez fournir une courte biographie ou utiliser le mot clé \'none\' (!promoteadm add user none).');
$.lang.register('discord.promotesystem.cmd.promoteadm.add.success', '$1 va maintenant être promu');
$.lang.register('discord.promotesystem.cmd.promoteadm.del.nouser', 'Qui souhaitez-vous retirer de la promotion ?');
$.lang.register('discord.promotesystem.cmd.promoteadm.del.success', '$1 ne sera plus promu');

$.lang.register('discord.promotesystem.cmd.promoteadm.channel.nochannel', 'Utiliser quel canal pour les promotions ? Pour supprimer le canal actuel, utilisez !promoteadm channel clear');
$.lang.register('discord.promotesystem.cmd.promoteadm.channel.cleared', 'La promotion du canal a été effacée.');
$.lang.register('discord.promotesystem.cmd.promoteadm.channel.success', 'La promotion du canal a été définie sur : $1');

$.lang.register('discord.promotesystem.cmd.promoteadm.streamchannel.nochannel', 'Utiliser quel canal pour les annonces de flux ? Pour supprimer le canal actuel, utilisez !promoteadm streamchannel clear');
$.lang.register('discord.promotesystem.cmd.promoteadm.streamchannel.cleared', 'Le canal d\'annonce de flux a été effacé.');
$.lang.register('discord.promotesystem.cmd.promoteadm.streamchannel.success', 'Le canal d\'annonce du flux a été défini sur : $1');

$.lang.register('discord.promotesystem.cmd.promoteadm.revoke.nouser', 'Révoquer le privilège de quel utilisateur pour pouvoir s\'ajouter ?');
$.lang.register('discord.promotesystem.cmd.promoteadm.revoke.success', '$1 ne sera plus promu et ne pourra plus se gérer.');

$.lang.register('discord.promotesystem.cmd.promoteadm.allow.nouser', 'Autoriser quel utilisateur à pouvoir s\'ajouter à nouveau ?');
$.lang.register('discord.promotesystem.cmd.promoteadm.allow.success', '$1 sera autorisé à s\'ajouter à nouveau.');

$.lang.register('discord.promotesystem.cmd.promoteadm.toggleselfmanage.off', 'Les utilisateurs ne pourront plus se gérer eux-mêmes via !promote ajouter et supprimer.');
$.lang.register('discord.promotesystem.cmd.promoteadm.toggleselfmanage.on', 'Les utilisateurs pourront désormais se gérer eux-mêmes via !promote ajouter et supprimer.');

$.lang.register('discord.promotesystem.cmd.promoteadm.togglestats.off', 'Les statistiques ne s\'afficheront plus lorsqu\'un flux est annoncé.');
$.lang.register('discord.promotesystem.cmd.promoteadm.togglestats.on', 'Les statistiques s\'afficheront désormais lorsqu\'un flux est annoncé.');

$.lang.register('discord.promotesystem.cmd.promoteadm.togglebanner.off', 'Les bannières ne s\'afficheront plus lorsqu\'un flux est annoncé.');
$.lang.register('discord.promotesystem.cmd.promoteadm.togglebanner.on', 'Les bannières s\'afficheront désormais lorsqu\'un flux est annoncé.');

$.lang.register('discord.promotesystem.cmd.promoteadm.list.empty', 'Aucun utilisateur n\'est actuellement promu.');
$.lang.register('discord.promotesystem.cmd.promoteadm.list.success', 'Utilisateurs promus : $1');

$.lang.register('discord.promotesystem.cmd.promoteadm.setinterval.nominutes', 'Fournir un intervalle en minutes.');
$.lang.register('discord.promotesystem.cmd.promoteadm.setinterval.tolow', 'L\'intervalle doit être de 15 minutes ou plus pour ne pas spammer le canal.');
$.lang.register('discord.promotesystem.cmd.promoteadm.setinterval.success', 'L\'intervalle de promotion des streamers a été fixé à $1 minutes.');

$.lang.register('discord.promotesystem.cmd.so.nouser', 'Vous devez fournir un utilisateur à rechercher et à crier.');
$.lang.register('discord.promotesystem.cmd.so.noexist', 'Cet utilisateur n\'est pas actuellement promu. Vérifiez ! liste de promotadm');

$.lang.register('discord.promotesystem.livemsg.title', '$1 est EN DIRECT @ https://twitch.tv/$2');
$.lang.register('discord.promotesystem.livemsg.nowplaying', 'Lecture en cours');
$.lang.register('discord.promotesystem.livemsg.streamtitle', 'Titre du flux');
$.lang.register('discord.promotesystem.livemsg.followers', 'Followers');
$.lang.register('discord.promotesystem.livemsg.views', 'Vues');
$.lang.register('discord.promotesystem.livemsg.missingtitle', 'Aucun titre fourni');
$.lang.register('discord.promotesystem.livemsg.missinggame', 'Aucun jeu fourni');

$.lang.register('discord.promotesystem.promotemsg.description', 'Assurez-vous de suivre et de payer $1');
$.lang.register('discord.promotesystem.promotemsg.biography', 'Bio');
$.lang.register('discord.promotesystem.promotemsg.nobio', 'Aucune biographie fournie.');