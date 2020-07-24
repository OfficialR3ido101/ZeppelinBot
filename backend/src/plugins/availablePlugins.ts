import { UtilityPlugin } from "./Utility/UtilityPlugin";
import { LocateUserPlugin } from "./LocateUser/LocateUserPlugin";
import { ZeppelinPluginBlueprint } from "./ZeppelinPluginBlueprint";
import { PersistPlugin } from "./Persist/PersistPlugin";
import { NameHistoryPlugin } from "./NameHistory/NameHistoryPlugin";
import { MessageSaverPlugin } from "./MessageSaver/MessageSaverPlugin";
import { AutoReactionsPlugin } from "./AutoReactions/AutoReactionsPlugin";
import { RemindersPlugin } from "./Reminders/RemindersPlugin";
import { UsernameSaverPlugin } from "./UsernameSaver/UsernameSaverPlugin";
import { WelcomeMessagePlugin } from "./WelcomeMessage/WelcomeMessagePlugin";
import { PingableRolesPlugin } from "./PingableRoles/PingableRolesPlugin";
import { GuildConfigReloaderPlugin } from "./GuildConfigReloader/GuildConfigReloaderPlugin";
import { CasesPlugin } from "./Cases/CasesPlugin";
import { MutesPlugin } from "./Mutes/MutesPlugin";
import { TagsPlugin } from "./Tags/TagsPlugin";
import { ModActionsPlugin } from "./ModActions/ModActionsPlugin";

// prettier-ignore
export const guildPlugins: Array<ZeppelinPluginBlueprint<any>> = [
  AutoReactionsPlugin,
  LocateUserPlugin,
  PersistPlugin,
  PingableRolesPlugin,
  MessageSaverPlugin,
  ModActionsPlugin,
  NameHistoryPlugin,
  RemindersPlugin,
  TagsPlugin,
  UsernameSaverPlugin,
  UtilityPlugin,
  WelcomeMessagePlugin,
  CasesPlugin,
  MutesPlugin,
];

// prettier-ignore
export const globalPlugins = [
  GuildConfigReloaderPlugin,
];
