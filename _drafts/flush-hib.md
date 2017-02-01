# Flushing on Hibernate

Whenever a managed entity gets dirty, Hibernate will push its changes to the database upon flush.

A flush takes place at every commit, before a query or when the `.flush()` method is called.

When a `.persist()` is called, Hibernate traverses all properties of every managed entity.

If cascade is configured at a given property, hibernate will add every transient property to the database, will ignore
every managed one (since it will be processed by itself just because it is managed) and show an error if a referenced entity is detached.

If there is no cascade and a referenced entity is transient, there will be an error as well. (You can prevent this error by calling
`.persist()` on the transient entity before adding it as a property of a managed entity.
