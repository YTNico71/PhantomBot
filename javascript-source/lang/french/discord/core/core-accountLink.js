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

$.lang.register('discord.accountlink.usage.nolink', 'Afin d\'utiliser ce module, assurez-vous que le bot n\'est pas bloqué pour vous envoyer des messages privés sur Discord.\nPour lier vos comptes Discord et Twitch, veuillez utiliser ce qui suit commande **!lien de compte**');
$.lang.register('discord.accountlink.usage.link', 'Votre compte Discord est actuellement lié à **https://twitch.tv/$1**.\nVous pouvez le modifier en utilisant **!lien de compte* * ou supprimez-le en utilisant **!account remove**');
$.lang.register('discord.accountlink.link', '**REMARQUE : Cela expire dans 10 minutes**.\nPour terminer le processus de liaison de vos comptes Discord et Twitch, veuillez vous connecter à Twitch, accédez à **https ://twitch.tv/$1**, et envoyez la commande **!account link $2**');
$.lang.register('discord.accountlink.link.relink', '**REMARQUE : Ceci expire dans 10 minutes**.\n**Cela supprimera automatiquement votre lien de compte précédent.** \nPour terminer le processus de lier votre compte Discord à votre compte Twitch, veuillez vous connecter à Twitch, aller sur **https://twitch.tv/$1** et envoyer la commande **!account link $2**');
$.lang.register('discord.accountlink.link.success', 'Votre compte Discord a été lié avec succès à **https://twitch.tv/$1**.\nVeuillez noter que si vous changez de nom sur Twitch , vous devrez refaire cela.');
$.lang.register('discord.accountlink.link.fail', 'Désolé, c\'est un jeton invalide ou expiré. Assurez-vous de copier EXACTEMENT la commande de liaison de compte. Si vous êtes sûr de l\'avoir saisie correctement, veuillez redémarrer le compte processus de liaison à partir d\'un canal de discussion sur le serveur Discord.');
$.lang.register('discord.accountlink.link.remove', 'Votre compte Discord a été dissocié de tous les comptes Twitch.\nPour lier votre compte Discord à votre compte Twitch, utilisez **!lien de compte** dans un canal de chat sur le serveur Discord');
$.lang.register('discord.accountlink.linkrequired', 'Désolé, cette commande n\'est disponible dans Discord qu\'après que votre compte Twitch a été lié à l\'aide de **!account**');