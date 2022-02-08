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

$.lang.register('quotesystem.add.usage1', 'Utilisation : !addquote [quote]');
$.lang.register('quotesystem.add.usage2', 'Utilisation : !addquote [utilisateur] [quote]');
$.lang.register('quotesystem.add.offline', 'Seuls les modérateurs peuvent ajouter des citations lorsque le flux est hors ligne.');
$.lang.register('quotesystem.add.success', 'Ajout d\'un nouveau devis de $1 avec l\'identifiant #$2.');
$.lang.register('quotesystem.del.usage', 'Utilisation : !delquote [quote id]');
$.lang.register('quotesystem.del.success', 'Deleted quote $1. Il y a maintenant $2 quotes.');
$.lang.register('quotesystem.del.404', 'Impossible de supprimer le devis $1... Êtes-vous sûr qu\'il existe ?');
$.lang.register('quotesystem.get.success', '[(id)] "(quote)", par (utilisateur) ((date))'); // Balises = (id) (citation) (utilisateur) (jeu) (date) //
$.lang.register('quotesystem.get.404', 'Impossible de trouver le devis $1... Êtes-vous sûr qu\'il existe ?');
$.lang.register('quotesystem.edit.usage', 'Utilisation : !editquote [quote id] [user|game|quote] text...]');
$.lang.register('quotesystem.edit.user.success', 'Utilisateur mis à jour sur le devis $1 à $2.');
$.lang.register('quotesystem.edit.game.success', 'Jeu mis à jour sur la citation $1 à $2.');
$.lang.register('quotesystem.edit.quote.success', 'Devis mis à jour sur le devis $1 à $2.');
$.lang.register('quotesystem.edit.404', 'Impossible de trouver le devis $1... Êtes-vous sûr qu\'il existe ?');
$.lang.register('quotesystem.quotemessage.usage', 'Utilisation : !quotemessage [message] (Tags : (id) (citation) (utilisateur) (jeu) (date))');
$.lang.register('quotesystem.quotemessage.success', 'Modification du message utilisé pour les citations.');
$.lang.register('quotesystem.searchquote.usage', 'Utilisation : !searchquote [texte] (Doit fournir au moins 5 caractères)');
$.lang.register('quotesystem.searchquote.404', 'Aucun guillemet correspondant trouvé.');
$.lang.register('quotesystem.searchquote.found', 'Citation d\'ID avec correspondance : $1');
$.lang.register('quotesystem.twitchnames-disabled', 'Les noms d\'utilisateur pour les guillemets ne seront pas validés');
$.lang.register('quotesystem.twitchnames-enabled', 'Les noms d\'utilisateur pour les citations seront validés par rapport aux utilisateurs qui ont participé au chat.');