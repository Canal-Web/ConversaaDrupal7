# Conversaa
Module principal de Conversaa pour Drupal 7. Ajoute le pixel de tracking et permet de récupérer les leads depuis Conversaa.
*Main Conversaa module for Drupal 7, that adds the tracking pixel and may retrieve leads from conversaa.*

## Pixel tracking

Dans  `admin/settings/conversaa`, remplir le champ d'instance liée par exemple : 
> http://monsite.conversaa.com

## Récupération des leads

Dans  `admin/settings/conversaa`, remplir les champs :

* Clé client et clé secrète : à générer sur l'instance Conversaa dans `Configuration > API Credentials`
* Url de rappel : Remplir avec `http://monsite.com/generate-oauth`

Sauvegarder puis cliquer sur le lien de génération des tokens. Le champ `tokens de connexion` devrait se remplir.

### Récupérer une liste de leads 

```
 $leadApi = conversaa_get_context('leads');
 $liste = $leadApi->getList();
```

### Filtrer une liste de leads
Exemple : Récupérer le lead le plus récent, d'après une adresse IP

`$liste = $leadApi->getList('ip:125.255.255.255', 0, 1, 'last_active', 'desc');`
